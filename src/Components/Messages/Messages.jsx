import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Typography } from '@material-ui/core';

function Messages() {
  const classes = useStyles();

  return (
    <div className={classes.table}>
      <Typography className='float-right'>Messages</Typography>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableBody>
            <TableRow>
              <TableCell>
                <AccountCircle />
              </TableCell>
              <TableCell>
                <Link to='/users/1'>Friend Name</Link>
              </TableCell>
              <TableCell>
                <AccountCircle />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Messages;
