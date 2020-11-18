import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AccountCircle from '@material-ui/icons/AccountCircle';

function Friends() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHead}>Friends</TableCell>
            <TableCell className={classes.tableHead}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component='th' scope='row'>
              <AccountCircle />
            </TableCell>
            <TableCell component='th' scope='row'>
              <Link to='/user'>Your Friend Name</Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Friends;
