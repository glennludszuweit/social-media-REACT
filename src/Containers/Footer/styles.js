import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    height: '150px',
    padding: theme.spacing(3, 2),
    color: '#E6E6E6',
    backgroundColor: '#400100',
  },
}));
