import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  tableRow: {
    border: 'none',
  },
  table: {
    minWidth: '100%',
    margin: '5px 0',
  },
  tableHead: {
    color: '#E6E6E6',
    backgroundColor: '#800300',
    fontSize: '16px',
    fontWeight: 600,
  },
  button: {
    margin: theme.spacing(1),
  },
}));
