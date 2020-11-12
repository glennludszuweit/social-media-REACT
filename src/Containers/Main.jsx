import Home from '../Views/Home';
import Auth from '../Views/Auth';
import Chat from '../Views/Chat';
import Profile from '../Views/Profile';
import Settings from '../Views/Settings';
import EditProfile from '../Views/EditProfile';
import MyFriends from '../Views/MyFriends';
import MyComments from '../Views/MyComments';
import MyPosts from '../Views/MyPosts';
import AddPost from '../Views/AddPost';
import EditPost from '../Views/EditPost';
import AllPosts from '../Views/AllPosts';
import PostView from '../Views/PostView';
import UsersList from '../Views/UsersList';
import UserProfile from '../Views/UserProfile';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function Main() {
  return (
    <Container>
      <Switch>
        <Route path='/me/posts/edit/:id' component={EditPost} />
        <Route path='/me/posts/add' component={AddPost} />
        <Route path='/me/posts' component={MyPosts} />
        <Route path='/me/comments' component={MyComments} />
        <Route path='/me/friends' component={MyFriends} />
        <Route path='/me/edit' component={EditProfile} />
        <Route path='/me/settings' component={Settings} />
        <Route path='/me' component={Profile} />
        <Route path='/users/:id' component={UserProfile} />
        <Route path='/users' component={UsersList} />
        <Route path='/posts/:id' component={PostView} />
        <Route path='/posts' component={AllPosts} />
        <Route path='/chat' component={Chat} />
        <Route path='/auth' component={Auth} />
        <Route exact path='/' component={Home} />
      </Switch>
    </Container>
  );
}

export default Main;
