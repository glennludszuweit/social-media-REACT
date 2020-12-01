import Home from '../../Components/Home/Home';
import Auth from '../../Components/Auth/Auth';
import UserView from '../../Components/Users/UserView/UserView';
import Posts from '../../Components/Posts/Posts';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { useStyles } from './styles';
import Status from '../../Components/Status/Status';
import { useSelector } from 'react-redux';
import PostAdd from '../../Components/Posts/PostAdd/PostAdd';

function Main() {
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);

  if (!auth.token) {
    return (
      <Container className={classes.root}>
        <Auth />
      </Container>
    );
  }

  return (
    <Container className={classes.root}>
      <Status />
      <PostAdd />
      <Switch>
        <Route path='/posts' component={Posts} />
        <Route path='/users/:id' component={UserView} />
        <Route path='/profile/:id' component={UserView} />
        <Route exact path='/' component={Home} />
        <Redirect to='/' />
      </Switch>
    </Container>
  );
}

export default Main;
