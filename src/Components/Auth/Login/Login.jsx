import { Link } from 'react-router-dom';
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
          />
          <TextField
            variant='outlined'
            margin='normal'
            label='Password'
            type='password'
            required
            fullWidth
          />
          <div className={classes.submit}>
            <button type='submit'>Sign In</button>
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
