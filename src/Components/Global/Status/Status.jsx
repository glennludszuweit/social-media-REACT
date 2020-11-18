import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useStyles } from './styles';

const Alert = (props) => {
  return <MuiAlert elevation={5} variant='filled' {...props} />;
};

function Status() {
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(true);
  }, [auth]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {auth.status === true ? (
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          <Alert onClose={handleClose} severity='success'>
            {auth.request === 'login' ? (
              <div>Logged in successfuly!</div>
            ) : auth.request === 'register' ? (
              <div>Registration successful!</div>
            ) : auth.request === 'logout' ? (
              <div>Logged out!</div>
            ) : null}
          </Alert>
        </Snackbar>
      ) : auth.status === false ? (
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          <Alert onClose={handleClose} severity='error'>
            {auth.request === 'login' ? (
              <div>Failed! please check credentials.</div>
            ) : auth.request === 'register' ? (
              <div>Failed! Check email or password</div>
            ) : null}
          </Alert>
        </Snackbar>
      ) : (
        ''
      )}
    </div>
  );
}

export default Status;
