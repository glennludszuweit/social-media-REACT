import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: 400,
    margin: '15px 0',
    border: 'none',
    borderRadius: 5,
    backgroundColor: 'transparent',
    marginRight: 5,
    height: 35,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    margin: '0 10px',
    padding: '0 10px',
  },
}));
