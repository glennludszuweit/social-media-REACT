import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#800300',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    '& button': {
      width: '100%',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#800300',
      margin: theme.spacing(3, 0, 2),
      color: '#E6E6E6',
      padding: '10px 0 10px',
      fontSize: '16px',
    },
    '& button:hover': {
      backgroundColor: '#BF0600',
      color: '#E6E6E6',
    },
    '& a': {
      color: '#E6E6E6',
      textDecoration: 'none',
    },
  },
}));
