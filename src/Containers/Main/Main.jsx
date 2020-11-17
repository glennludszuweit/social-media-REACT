import Home from '../../Components/Home/Home';
import Auth from '../../Components/Auth/Auth';
import User from '../../Components/Users/UserView/UserView';
import Users from '../../Components/Users/Users';
import PostView from '../../Components/Posts/PostView/PostView';
import Posts from '../../Components/Posts/Posts';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function Main() {
  return (
    <Container>
      <Switch>
        <Route path='/posts/:id' component={PostView} />
        <Route path='/posts' component={Posts} />
        <Route path='/users/:id' component={User} />
        <Route path='/users' component={Users} />
        <Route path='/auth' component={Auth} />
        <Route exact path='/' component={Home} />
      </Switch>
    </Container>
  );
}

export default Main;
