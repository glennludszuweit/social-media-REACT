import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearPostData, getPosts } from './Redux/Actions/posts';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Header from './Containers/Header/Header';
import Main from './Containers/Main/Main';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useStyles } from './styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#400100' },
    secondary: { main: '#BF0600' },
  },
});

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Header />
        <Main />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
