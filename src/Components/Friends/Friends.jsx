import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { Avatar, IconButton, TableHead } from '@material-ui/core';
import TextsmsIcon from '@material-ui/icons/Textsms';
import PeopleIcon from '@material-ui/icons/People';

function Friends() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.table}>
      <Table aria-label='simple table'>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align='center'>
              <PeopleIcon className={classes.tableHeadIcon} />
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.tableRow}>
          <TableRow>
            <TableCell align='left'>
              <Link to='/users/1'>
                <Avatar alt='Remy Sharp' src='' />
              </Link>
            </TableCell>
            <TableCell>
              <Link to='/users/1'>Friend Name</Link>
            </TableCell>
            <TableCell align='right'>
              <IconButton>
                <TextsmsIcon />
              </IconButton>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell align='left'>
              <Link to='/users/1'>
                <Avatar alt='Remy Sharp' src='' />
              </Link>
            </TableCell>
            <TableCell>
              <Link to='/users/1'>Friend Name</Link>
            </TableCell>
            <TableCell align='right'>
              <IconButton>
                <TextsmsIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Friends;
