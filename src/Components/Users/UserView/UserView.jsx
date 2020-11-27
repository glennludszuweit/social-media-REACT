import { useEffect, useState } from 'react';
import { useStyles } from './styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUser } from '../../../Redux/Actions/users';

function UserView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) => state.users.userData);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);

  return (
    <Paper elevation={0} className={classes.root}>
      <div align='center'>
        <img
          className={classes.userImage}
          src='https://images.unsplash.com/photo-1542310441-c2c6c8da6d98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80'
          alt='Smoking'
        />
      </div>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'
        centered
      >
        <Tab label='Account Info' />
        <Tab label='Posts' />
        <Tab label='Friends' />
      </Tabs>
    </Paper>
  );
}

export default UserView;
