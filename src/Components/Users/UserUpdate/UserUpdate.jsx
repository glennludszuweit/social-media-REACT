import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../Redux/Actions/auth';
import { updateUser, deleteUser } from '../../../Redux/Actions/users';
import { useStyles } from './styles';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

function UserUpdate({ user, authUser }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [updateUserData, setUpdateUserData] = useState({
    name: user.name,
    email: user.email,
  });

  return (
    <div>
      <Grid container className={classes.userInfo}>
        <Grid item xs={12} sm={6}>
          {user.avatar ? (
            <div className={classes.userImgContainer}>
              <img
                className={classes.userImage}
                src={user.avatar}
                alt={user.name}
              />
              <div className={classes.uploadImgBtn}>
                <input
                  accept='image/*'
                  className={classes.input}
                  id='icon-button-file'
                  type='file'
                />
                <label htmlFor='icon-button-file'>
                  <IconButton
                    color='primary'
                    aria-label='upload picture'
                    component='span'
                  >
                    <PhotoCamera fontSize='large' color='secondary' />
                  </IconButton>
                </label>
              </div>
            </div>
          ) : (
            <div className={classes.userImgContainer}>
              <img
                className={classes.userImage}
                src='https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1445&q=80'
                alt={user.name}
              />
              <div className={classes.uploadImgBtn}>
                <input
                  accept='image/*'
                  className={classes.input}
                  id='icon-button-file'
                  type='file'
                />
                <label htmlFor='icon-button-file'>
                  <IconButton
                    color='primary'
                    aria-label='upload picture'
                    component='span'
                  >
                    <PhotoCamera fontSize='large' color='secondary' />
                  </IconButton>
                </label>
              </div>
            </div>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl
            fullWidth
            className={classes.textField}
            variant='outlined'
          >
            <InputLabel htmlFor='name'>Name</InputLabel>
            <OutlinedInput
              fullWidth
              id='name'
              value={updateUserData.name}
              onChange={(e) =>
                setUpdateUserData({ ...updateUserData, name: e.target.value })
              }
              startAdornment={
                <InputAdornment position='start'>
                  <AccountBoxIcon className={classes.textFieldIcon} />
                </InputAdornment>
              }
              labelWidth={60}
            />
          </FormControl>
          <FormControl
            fullWidth
            className={classes.textField}
            variant='outlined'
          >
            <InputLabel htmlFor='email'>Email</InputLabel>
            <OutlinedInput
              fullWidth
              type='emial'
              id='email'
              value={updateUserData.email}
              onChange={(e) =>
                setUpdateUserData({ ...updateUserData, email: e.target.value })
              }
              startAdornment={
                <InputAdornment position='start'>
                  <AlternateEmailIcon className={classes.textFieldIcon} />
                </InputAdornment>
              }
              labelWidth={60}
            />
          </FormControl>
        </Grid>
      </Grid>
      <div className={classes.adminButtons}>
        <Button
          variant='contained'
          color='secondary'
          className={classes.button}
          startIcon={<DeleteIcon />}
          onClick={() => {
            dispatch(deleteUser(user.id, authUser.token));
            dispatch(logout(authUser.refreshToken));
          }}
        >
          Delete Account
        </Button>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          endIcon={<SaveIcon />}
          onClick={() => dispatch(updateUser(user.id, updateUserData))}
        >
          Update
        </Button>
      </div>
    </div>
  );
}

export default UserUpdate;
