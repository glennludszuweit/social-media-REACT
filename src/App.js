import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './Containers/Header/Header';
import Main from './Containers/Main/Main';

import 'bootstrap/dist/css/bootstrap.min.css';
import { getPosts } from './Redux/Actions/posts';

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getPosts()), [dispatch]);

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
