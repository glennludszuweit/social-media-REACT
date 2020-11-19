import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Avatar, IconButton, TableHead } from '@material-ui/core';
import TextsmsIcon from '@material-ui/icons/Textsms';

function Friends() {
  const classes = useStyles();

  return (
    <div className={classes.table}>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='left'>Friends</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.tableRow} align='left'>
                <Link to='/users/1'>
                  <Avatar alt='Remy Sharp' src='' />
                </Link>
              </TableCell>
              <TableCell className={classes.tableRow}>
                <Link to='/users/1'>Friend Name</Link>
              </TableCell>
              <TableCell className={classes.tableRow} align='right'>
                <IconButton>
                  <TextsmsIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Friends;
