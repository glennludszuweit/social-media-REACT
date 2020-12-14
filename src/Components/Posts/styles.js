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
  tabs: {
    fontWeight: 600,
  },
  card: {
    display: 'flex',
  },
  date: { color: '#777777' },
  cardDetails: {
    flex: 1,
  },
  cardMediaContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardMedia: {
    width: 65,
    height: 65,
    objectFit: 'cover',
    margin: '10px 0 10px 15px',
    borderRadius: '100%',
  },
  postIcons: {
    margin: 10,
  },
  icon: {
    margin: '0 10px',
  },
  paginateContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 0 20px',
  },
}));
