import Posts from '../Posts/Posts';
import UserFriends from '../Users/UserFriends/UserFriends';
import { Grid, Hidden } from '@material-ui/core';
import { useStyles } from './styles.js';

function Home() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item lg={8} md={8} sm={12} xs={12}>
        <Posts />
      </Grid>
      <Hidden smDown>
        <Grid item lg={4} md={4}>
          <UserFriends />
        </Grid>
      </Hidden>
    </Grid>
  );
}

export default Home;
