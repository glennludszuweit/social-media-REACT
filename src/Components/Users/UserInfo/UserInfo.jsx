import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../../Redux/Actions/users';
import { useStyles } from './styles';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';

function UserInfo({ user, authUser }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [updateUserData, setUpdateUserData] = useState({
    avatar: user.avatar ? user.avatar : null,
    name: user.name,
    email: user.email,
  });

  return user.id === authUser.authUserData.id ? (
    <div>
      <Grid container className={classes.userInfo}>
        <Grid item xs={12} sm={6}>
          {user.avatar ? (
            <img
              className={classes.userImage}
              src={user.avatar}
              alt={user.name}
            />
          ) : (
            <img
              className={classes.userImage}
              src='https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1445&q=80'
              alt={user.name}
            />
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
              defaultValue={user.name}
              onChange={() => {}}
              startAdornment={
                <InputAdornment position='start'>
                  <AssignmentIndIcon className={classes.textFieldIcon} />
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
              defaultValue={user.email}
              onChange={() => {}}
              startAdornment={
                <InputAdornment position='start'>
                  <ContactMailIcon className={classes.textFieldIcon} />
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
        >
          Delete Account
        </Button>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          endIcon={<SaveIcon />}
        >
          Update
        </Button>
      </div>
    </div>
  ) : (
    <div>
      <Grid container className={classes.userInfo}>
        <Grid item xs={12} sm={6}>
          {user.avatar ? (
            <img
              className={classes.userImage}
              src={user.avatar}
              alt={user.name}
            />
          ) : (
            <img
              className={classes.userImage}
              src='https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1445&q=80'
              alt={user.name}
            />
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <h3>{user.name}</h3>
          <h3>{user.email}</h3>
        </Grid>
      </Grid>
      <div className={classes.userButtons}>
        <Button
          variant='contained'
          className={classes.button}
          startIcon={<DeleteIcon />}
        >
          Add Friend
        </Button>
        <Button
          variant='contained'
          className={classes.button}
          startIcon={<SaveIcon />}
        >
          Message
        </Button>
      </div>
    </div>
  );
}

export default UserInfo;
