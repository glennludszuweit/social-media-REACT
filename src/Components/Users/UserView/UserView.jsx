import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUser } from '../../../Redux/Actions/users';
import { useStyles } from './styles';
import Posts from '../../Posts/Posts';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box style={{ width: 600, margin: '0 auto', padding: '20px 5px' }}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function UserView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) => state.users.userData);
  const authUser = useSelector((state) => state.auth.authUserData);
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
        <img className={classes.userImage} src={user.avatar} alt={user.name} />
      </div>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'
        centered
      >
        <Tab label='Info' {...a11yProps(0)} />
        <Tab label='Posts' {...a11yProps(1)} />
        <Tab label='Friends' {...a11yProps(2)} />
        <Tab label='Groups' {...a11yProps(3)} />
      </Tabs>

      {id === authUser.id ? (
        <div>
          <TabPanel value={value} index={0}>
            <h1>{authUser.name}</h1>
            <h1>{authUser.email}</h1>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Posts />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <h1>Friends</h1>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <h1>Groups</h1>
          </TabPanel>
        </div>
      ) : (
        <div>
          <TabPanel value={value} index={0}>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <h1>Posts</h1>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <h1>Friends</h1>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <h1>Groups</h1>
          </TabPanel>
        </div>
      )}
    </Paper>
  );
}

export default UserView;
