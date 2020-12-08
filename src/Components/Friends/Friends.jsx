import { useState } from 'react';
import ApprovedFriends from './ApprovedFriends/ApprovedFriends'
import PendingFriends from './PendingFriends/PendingFriends'
import { useStyles } from './styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

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
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={0} className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'
        variant='fullWidth'
        centered
      >
        <Tab icon={<SupervisorAccountIcon />} {...a11yProps(0)} />
        <Tab icon={<GroupAddIcon />} {...a11yProps(1)} />
      </Tabs>

      <div className={classes.body}>
        <TabPanel value={value} index={0}>
          <ApprovedFriends />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PendingFriends />
        </TabPanel>
       
      </div>
    </Paper>
  );
}

export default UserView;
