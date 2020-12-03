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
  userImgContainer: {
    position: 'relative',
  },
  uploadImgBtn: {
    position: 'absolute',
    bottom: -10,
    right: 50,
  },
  userImage: {
    width: 200,
    height: 200,
    objectFit: 'cover',
    boxShadow: '0 6px 8px 2px rgba(1, 1, 1, 0.2)',
    borderRadius: 5,
  },
  input: {
    display: 'none',
  },
  button: {
    margin: theme.spacing(1),
  },
  adminButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
  },
}));
