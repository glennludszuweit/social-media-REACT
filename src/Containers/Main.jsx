import Home from '../Pages/Home';
import Auth from '../Pages/Auth';
import User from '../Pages/User';
import Users from '../Pages/Users';
import Post from '../Pages/Post';
import Posts from '../Pages/Posts';
import UserSettings from '../Components/Users/UserSettings';
import UserPosts from '../Components/Users/UserPosts';
import AddPost from '../Components/Posts/AddPost';
import EditPost from '../Components/Posts/EditPost';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function Main() {
  return (
    <Container>
      <Switch>
        <Route path='/me/posts/edit/:id' component={EditPost} />
        <Route path='/me/posts/add' component={AddPost} />
        <Route path='/me/posts' component={UserPosts} />
        <Route path='/me/settings' component={UserSettings} />
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
