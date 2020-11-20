import { Redirect, Route, Switch } from 'react-router-dom';
import Status from '../Status/Status';
import Login from './Login/Login';
import Register from './Register/Register';

function Auth() {
  return (
    <div>
      <Status />
      <Switch>
        <Route path='/auth/login' component={Login} />
        <Route path='/auth/register' component={Register} />
        <Redirect to='/auth/login' />
      </Switch>
    </div>
  );
}

export default Auth;
