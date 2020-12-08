import Posts from '../Posts/Posts';
import Friends from '../Friends/Friends';
import { Grid, Hidden } from '@material-ui/core';
import { useStyles } from './styles.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPosts } from '../../Redux/Actions/posts';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <Grid container>
      <Grid item lg={9} md={9} sm={12} xs={12}>
        <Posts />
      </Grid>
      <Hidden smDown>
        <Grid item lg={3} md={3}>
          <Friends />
        </Grid>
      </Hidden>
    </Grid>
  );
}

export default Home;
