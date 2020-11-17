import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useStyles } from './styles';

function Alert(props) {
  return <MuiAlert elevation={5} variant='filled' {...props} />;
}

function Status() {
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);
  const [status, setStatus] = useState(null);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setStatus(auth[0].status);
    setOpen(true);
  }, [auth, status]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {status === true ? (
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          <Alert onClose={handleClose} severity='success'>
            Success!
          </Alert>
        </Snackbar>
      ) : status === false ? (
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          <Alert onClose={handleClose} severity='error'>
            Failed!
          </Alert>
        </Snackbar>
      ) : (
        ''
      )}
    </div>
  );
}

export default Status;
