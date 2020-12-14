import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../../Redux/Actions/users";
import { useStyles } from "./styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import UserPosts from "./UserPosts/UserPosts";
import UserInfo from "./UserInfo/UserInfo";
import Friends from "../Friends/Friends";
import { getPosts } from "../../Redux/Actions/posts";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box style={{ maxWidth: 600, margin: "0 auto", padding: "20px 5px" }}>
          <Typography component={"span"}>{children}</Typography>
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function UserView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) => state.users.userData);
  const posts = useSelector((state) => state.posts.postData);
  const authUser = useSelector((state) => state.auth);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(getUser(id));
    dispatch(getPosts());
  }, [dispatch, id]);

  return (
    <Paper elevation={0} className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Info" {...a11yProps(0)} />
        <Tab label="Posts" {...a11yProps(1)} />
        <Tab label="Friends" {...a11yProps(2)} />
      </Tabs>

      <div>
        <TabPanel value={value} index={0}>
          <UserInfo user={user} authUser={authUser} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <UserPosts posts={posts} authUser={authUser} user={user} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Friends user={user} authUser={authUser} />
        </TabPanel>
      </div>
    </Paper>
  );
}

export default UserView;