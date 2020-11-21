import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    margin: '20px 0',
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
  },
  date: { color: '#777777' },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 65,
    height: 65,
    objectFit: 'cover',
    margin: '10px 0 10px 15px',
  },
  postIcons: {
    margin: 10,
  },
  icon: {
    margin: '0 10px',
  },
});
