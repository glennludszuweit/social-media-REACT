import Home from '../../Pages/Home';
import Auth from '../../Components/Auth/Auth';
import User from '../../Pages/User';
import Users from '../../Pages/Users';
import Post from '../../Pages/Post';
import Posts from '../../Pages/Posts';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function Main() {
  return (
    <Container>
      <Switch>
        <Route path='/posts/:id' component={Post} />
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
