import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    margin: '20px 0',
    width: '100%',
    backgroundColor: 'transparent',
  },
  userImage: {
    width: 300,
    height: 300,
    objectFit: 'cover',
    margin: 20,
    boxShadow: '0 6px 8px 2px rgba(1, 1, 1, 0.2)',
    borderRadius: 5,
  },
});
