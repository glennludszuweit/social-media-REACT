import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: '20px 10px',
    borderLeft: '1px solid #F2B3B3',
    borderRight: '1px solid #F2B3B3',
    borderBottom: '1px solid #F2B3B3',
    '& a': {
      color: '#400100',
      textDecoration: 'none',
    },
    '& a:hover': {
      color: '#BF0600',
    },
    boxShadow: '0 4px 3px -2px rgba(1, 1, 1, 0.1)',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardImage: {
    margin: '10px',
  },
  postIcons: {
    margin: 10,
  },
}));