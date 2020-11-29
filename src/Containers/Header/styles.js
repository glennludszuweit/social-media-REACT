import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  iconMenu: {
    '& a': {
      color: '#000',
      textDecoration: 'none',
    },
    '& a:hover': {
      color: '#400100',
    },
  },
  searchContainer: {
    margin: '0 10px',
    display: 'flex',
    alignItems: 'center',
  },
  root: {
    backgroundColor: '#400100',
    color: '#E6E6E6',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));
