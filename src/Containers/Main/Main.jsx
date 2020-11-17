import Home from '../../Components/Home/Home';
import Auth from '../../Components/Auth/Auth';
import User from '../../Components/Users/UserView/UserView';
import Users from '../../Components/Users/Users';
import PostView from '../../Components/Posts/PostView/PostView';
import Posts from '../../Components/Posts/Posts';
import { Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { useStyles } from './styles';
import Status from '../../Components/Global/Status/Status';
import { useSelector } from 'react-redux';

function Main() {
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);

  return auth[0].status === true ? (
    <Container className={classes.root}>
      <Status />
      <Switch>
        <Route path='/posts/:id' component={PostView} />
        <Route path='/posts' component={Posts} />
        <Route path='/users/:id' component={User} />
        <Route path='/users' component={Users} />
        <Route exact path='/' component={Home} />
      </Switch>
    </Container>
  ) : (
    <Container className={classes.root}>
      <Switch>
        <Route path='/auth/login' component={Auth} />
      </Switch>
    </Container>
  );
}

export default Main;
