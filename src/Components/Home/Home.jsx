import Posts from "../Posts/Posts";
import Friends from "../Friends/Friends";
import { Grid, Hidden } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../../Redux/Actions/posts";
import { getUser, getUserFriends } from "../../Redux/Actions/users";

function Home() {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth);
  const user = useSelector((state) => state.users.userData);

  const authFriendsId = authUser.authUserData.friends.map((x) => x.id);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUser(authUser.authUserData.id));
    dispatch(getUserFriends(authFriendsId));
  }, []);

  return (
    <Grid container>
      <Grid item lg={9} md={9} sm={12} xs={12}>
        <Posts />
      </Grid>
      <Hidden smDown>
        <Grid item lg={3} md={3}>
          <Friends user={user} authUser={authUser} />
        </Grid>
      </Hidden>
    </Grid>
  );
}

export default Home;
