import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/Actions/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import Search from '../../Components/Global/Search/Search';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PeopleIcon from '@material-ui/icons/People';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MoreIcon from '@material-ui/icons/MoreVert';

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
    >
      <MenuItem className={classes.iconMenu}>
        <Search />
      </MenuItem>
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
        <IconButton aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <MailIcon />
          </Badge>
        </IconButton>
        <p>
          <Link to='/Messages'>Messages</Link>
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
          <Typography>
            <Link to='/'>
              <BrokenImageIcon />
            </Link>
          </Typography>

          <div className={classes.sectionDesktop}>
            <Search />
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
            <IconButton aria-label='show 4 new mails' color='inherit'>
              <Badge badgeContent={4} color='secondary'>
                <Link to='/messages'>
                  <MailIcon />
                </Link>
              </Badge>
            </IconButton>
            <IconButton
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <AccountCircle />
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
          <Typography>
            <Link to='/'>
              <BrokenImageIcon />
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
