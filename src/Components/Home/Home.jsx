import Posts from '../Posts/Posts';
import Friends from '../Friends/Friends';
import { Grid, Hidden } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPosts } from '../../Redux/Actions/posts';
import {
  getUser,
  getUserFriendRequests,
  getUserFriends,
} from '../../Redux/Actions/users';

function Home() {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth);
  const user = useSelector((state) => state.users.userData);
  const authUserFriendsIds = authUser.authUserData.friends;
  const authUserFriendReqeustsIds = authUser.authUserData.friendRequests;

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUser(authUser.authUserData.id));
    dispatch(getUserFriends(authUserFriendsIds));
    dispatch(getUserFriendRequests(authUserFriendReqeustsIds));
  }, []);

  return (
    <Grid container>
      <Grid item lg={8} md={8} sm={12} xs={12}>
        <Posts />
      </Grid>
      <Hidden smDown>
        <Grid item lg={4} md={4}>
          <Friends user={user} authUser={authUser} />
        </Grid>
      </Hidden>
    </Grid>
  );
}

export default Home;
