import Home from '../../Components/Home/Home';
import Auth from '../../Components/Auth/Auth';
import User from '../../Components/Users/UserView/UserView';
import Users from '../../Components/Users/Users';
import PostView from '../../Components/Posts/PostView/PostView';
import Posts from '../../Components/Posts/Posts';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { useStyles } from './styles';
import Status from '../../Components/Global/Status/Status';
import { useSelector } from 'react-redux';

function Main() {
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);

  if (!auth.tokens) {
    return <Auth />;
  }

  return (
    <Container className={classes.root}>
      <Status />
      <Switch>
        <Route path='/posts/:id' component={PostView} />
        <Route path='/posts' component={Posts} />
        <Route path='/users/:id' component={User} />
        <Route path='/users' component={Users} />
        <Route exact path='/' component={Home} />
        <Redirect to='/' />
      </Switch>
    </Container>
  );
}

export default Main;
