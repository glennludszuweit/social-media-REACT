import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import PeopleIcon from '@material-ui/icons/People';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Typography } from '@material-ui/core';

function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position='static' className={classes.nav}>
        <Toolbar className={classes.root}>
          <Typography>
            <Link to='/'>GLUED</Link>
          </Typography>

          <div>
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

            <IconButton
              aria-label='account of current user'
              aria-controls='profile-menu'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>

            <Menu
              className={classes.iconMenu}
              id='profile-menu'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link to='/me'>My Account</Link>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <Link to='/'>Logout</Link>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
