import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  nav: {
    backgroundColor: '#800300',
  },
  iconMenu: {
    '& a': {
      color: '#000',
      textDecoration: 'none',
    },
    '& a:hover': {
      color: '#400100',
    },
  },
  root: {
    color: '#E6E6E6',
    justifyContent: 'space-between',
    '& a': {
      color: '#e6e6e6',
      textDecoration: 'none',
    },
    '& a:hover': {
      color: '#fff',
    },
  },
  logo: {
    justifyContent: 'space-between',
  },
}));
