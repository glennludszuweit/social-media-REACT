import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  table: {
    width: '100%',
    margin: '20px',
    border: 'none',
    boxShadow: '0 4px 3px -2px rgba(1, 1, 1, 0.1)',
  },
  tableHead: {
    border: 'none',
    borderBottom: '2px solid #800300',

    '& th': {
      border: 'none',
    },
  },
  tableRow: {
    border: '1px solid #F2B3B3',

    '& td': {
      border: 'none',
      borderBottom: '1px solid #F2B3B3',
    },
  },
  tableHeadIcon: {
    fontSize: '40px',
    color: '#400100',
  },
  button: {
    margin: theme.spacing(1),
  },
}));
