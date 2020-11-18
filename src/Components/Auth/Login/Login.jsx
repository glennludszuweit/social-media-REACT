import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { login } from '../../../Redux/Actions/auth';
import { useStyles } from './styles';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData));
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            label='Email Address'
            type='text'
            required
            fullWidth
            autoFocus
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <TextField
            variant='outlined'
            margin='normal'
            label='Password'
            type='password'
            required
            fullWidth
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <div className={classes.submit}>
            <button type='submit' onClick={handleSubmit}>
              Login
            </button>
          </div>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link to='/auth/register' variant='body2'>
                {"Don't have an account? Register"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Login;
