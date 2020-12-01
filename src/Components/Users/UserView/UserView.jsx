import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUser, getUserPosts } from '../../../Redux/Actions/users';
import { useStyles } from './styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import UserFriends from '../UserFriends/UserFriends';
import UserPosts from '../UserPosts/UserPosts';
import UserGroups from '../UserGroups/UserGroups';
import UserInfo from '../UserInfo/UserInfo';

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
        <Box style={{ maxWidth: 600, margin: '0 auto', padding: '20px 5px' }}>
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
  const userPosts = useSelector((state) => state.users.userPosts);
  const authUser = useSelector((state) => state.auth.authUserData);
  const authUserPosts = useSelector((state) => state.posts.postData);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(getUser(id));
    dispatch(getUserPosts(id));
  }, [dispatch, id]);

  return (
    <Paper elevation={0} className={classes.root}>
      <div align='center'>
        {authUser.avatar ? (
          <img
            className={classes.userImage}
            src={authUser.avatar}
            alt={authUser.name}
          />
        ) : user.avatar ? (
          <img
            className={classes.userImage}
            src={user.avatar}
            alt={user.name}
          />
        ) : null}
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
            <UserInfo user={authUser} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <UserPosts posts={authUserPosts} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <UserFriends />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <UserGroups />
          </TabPanel>
        </div>
      ) : (
        <div>
          <TabPanel value={value} index={0}>
            <UserInfo user={user} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <UserPosts posts={userPosts} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <UserFriends />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <UserGroups />
          </TabPanel>
        </div>
      )}
    </Paper>
  );
}

export default UserView;
