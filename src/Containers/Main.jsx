import Home from '../Pages/Home';
import Chat from '../Pages/Chat';
import Auth from '../Pages/Auth';
import UserSettings from '../Components/Users/UserSettings';
import UserProfile from '../Components/Users/UserProfile';
import UserPosts from '../Components/Users/UserPosts';
import AddPost from '../Components/Posts/AddPost';
import EditPost from '../Components/Posts/EditPost';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Users from '../Pages/Users';
import Post from '../Pages/Post';

function Main() {
  return (
    <Container>
      <Switch>
        <Route path='/me/posts/edit/:id' component={EditPost} />
        <Route path='/me/posts/add' component={AddPost} />
        <Route path='/me/posts' component={UserPosts} />
        <Route path='/me/settings' component={UserSettings} />
        <Route path='/users/:id' component={UserProfile} />
        <Route path='/posts/:id' component={Post} />
        <Route path='/chat' component={Chat} />
        <Route path='/users' component={Users} />
        <Route path='/home' component={Home} />
        <Route exact path='/' component={Auth} />
      </Switch>
    </Container>
  );
}

export default Main;
