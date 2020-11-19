import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/Actions/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import Search from '../../Components/Search/Search';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PeopleIcon from '@material-ui/icons/People';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MoreIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import { Avatar } from '@material-ui/core';

function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className={classes.iconMenu}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to='/me'>My account</Link>
      </MenuItem>
      <MenuItem
        onClick={() => {
          dispatch(logout(auth.refreshTokens));
          handleMenuClose();
        }}
      >
        Logout
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = auth.tokens ? (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      className={classes.mobileMenuBar}
    >
      <MenuItem className={classes.iconMenu}>
        <IconButton color='inherit'>
          <MenuBookIcon />
        </IconButton>
        <p>
          <Link to='/posts'>posts</Link>
        </p>
      </MenuItem>
      <MenuItem className={classes.iconMenu}>
        <IconButton color='inherit'>
          <PeopleIcon />
        </IconButton>
        <p>
          <Link to='/users'>Users</Link>
        </p>
      </MenuItem>
      <MenuItem className={classes.iconMenu}>
        <IconButton color='inherit'>
          <AddIcon />
        </IconButton>
        <p>
          <Link to='/posts/add'>Add post</Link>
        </p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen} className={classes.iconMenu}>
        <IconButton
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  ) : (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem className={classes.iconMenu}>
        <IconButton color='inherit'>
          <VpnKeyIcon />
        </IconButton>
        <p>
          <Link to='/auth/login'>Login</Link>
        </p>
      </MenuItem>
    </Menu>
  );

  return auth.tokens ? (
    <div className={classes.grow}>
      <AppBar position='static'>
        <Toolbar className={classes.root}>
          <div className={classes.searchContainer}>
            <Typography className='mr-4'>
              <Link to='/'>
                <BrokenImageIcon fontSize='large' />
              </Link>
            </Typography>
            <Search />
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton color='inherit'>
              <Link to='/posts'>
                <MenuBookIcon />
              </Link>
            </IconButton>
            <IconButton color='inherit'>
              <Link to='/users'>
                <PeopleIcon />
              </Link>
            </IconButton>
            <IconButton color='inherit'>
              <Link to='#'>
                <AddIcon />
              </Link>
            </IconButton>
            <IconButton
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <Avatar alt='Remy Sharp' src='' />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  ) : (
    <div className={classes.grow}>
      <AppBar position='static'>
        <Toolbar className={classes.root}>
          <Typography fontSize='large'>
            <Link to='/'>
              <BrokenImageIcon fontSize='large' />
            </Link>
          </Typography>
          <IconButton color='inherit'>
            <Link to='/auth/login'>
              <VpnKeyIcon />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

export default Header;
