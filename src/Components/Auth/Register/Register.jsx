import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../../Redux/Actions/auth';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function Register() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData));
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Register
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            label='Name'
            type='text'
            required
            fullWidth
            autoFocus
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <TextField
            variant='outlined'
            margin='normal'
            label='Email Address'
            type='email'
            required
            fullWidth
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <small>Please enter a valid email address.</small>

          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            label='Password'
            type='password'
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <small>Password must be at least 8 characters.</small>
          <div className={classes.submit}>
            <button type='submit' onClick={handleSubmit}>
              Register
            </button>
          </div>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link to='/auth/login' variant='body2'>
                {'Already have an account? Login'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Register;
