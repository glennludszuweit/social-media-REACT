import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  textField: {
    margin: '15px 0',
    width: '100%',
  },
  textFieldIcon: {
    marginRight: 10,
  },
  userInfo: {
    maxWidth: 500,
    margin: '20px 0',
  },
  userImage: {
    width: 200,
    height: 200,
    objectFit: 'cover',
    boxShadow: '0 6px 8px 2px rgba(1, 1, 1, 0.2)',
    borderRadius: 5,
  },
  button: {
    margin: theme.spacing(1),
  },
  adminButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
  },
  userButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '10px 0',
  },
}));
