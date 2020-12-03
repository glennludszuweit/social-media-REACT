import moment from 'moment';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, MemoryRouter, Route } from 'react-router-dom';
import { deletePost, editForm } from '../../Redux/Actions/posts.js';
import { useStyles } from './styles';
import PostEdit from './PostEdit/PostEdit';
import Comments from '../Comments/Comments';
import {
  Box,
  CircularProgress,
  Collapse,
  IconButton,
  Tab,
  Tabs,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Hidden from '@material-ui/core/Hidden';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import CloseIcon from '@material-ui/icons/Close';
import { Pagination, PaginationItem } from '@material-ui/lab';

function Posts() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.postData);
  const authUser = useSelector((state) => state.auth.authUserData);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [view, setView] = useState(0);
  // const [viewPosts, setViewPosts] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setViewPosts(true);
  //   }, 3000);
  // }, []);

  const handleChange = (event, newValue) => {
    setView(newValue);
  };

  return (
    <div>
      <Tabs
        style={{ margin: '20px 0' }}
        value={view}
        onChange={handleChange}
        textColor='primary'
        indicatorColor='primary'
        TabIndicatorProps={{
          style: {
            height: '10%',
          },
        }}
        variant='fullWidth'
      >
        <Tab label='LIST' className={classes.tabs} />
        <Tab label='GRID' className={classes.tabs} />
      </Tabs>

      {posts ? (
        posts.map((post, index) => (
          <div className={classes.root} key={index}>
            <div className={classes.card}>
              <Link to={`/users/${post.author.id}`}>
                {post.author.avatar ? (
                  <img
                    className={classes.cardMedia}
                    src={post.author.avatar}
                    alt={post.author.name}
                  />
                ) : (
                  <img
                    className={classes.cardMedia}
                    src='https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1445&q=80'
                    alt={post.author.name}
                  />
                )}
              </Link>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Link
                    to='#'
                    id={index}
                    onClick={() => {
                      setSelected(index);
                      setOpen(true);
                      dispatch(editForm(false));
                    }}
                  >
                    <Typography variant='h5'>
                      {post.message.slice(0, 20)}
                    </Typography>
                  </Link>
                  <small className={classes.date}>
                    {moment(post.updatedAt).calendar()}
                  </small>
                </CardContent>
              </div>
              <Hidden xsDown>
                <div className={classes.postIcons}>
                  <IconButton color='primary' onClick={() => {}}>
                    <ThumbUpIcon fontSize='small' />
                  </IconButton>
                  <IconButton color='secondary' onClick={() => {}}>
                    <ThumbDownIcon fontSize='small' />
                  </IconButton>
                  {post.author.id === authUser.id ? (
                    <span>
                      <IconButton
                        onClick={() => {
                          setSelected(index);
                          setOpen(true);
                          dispatch(editForm(true));
                        }}
                      >
                        <EditIcon fontSize='small' />
                      </IconButton>
                      <IconButton
                        onClick={() =>
                          dispatch(deletePost(post.id, post.author.id))
                        }
                      >
                        <DeleteIcon fontSize='small' />
                      </IconButton>
                    </span>
                  ) : null}
                </div>
              </Hidden>
            </div>

            {selected === index ? (
              <Collapse in={open} timeout='auto' unmountOnExit>
                <Box margin={2}>
                  <div align='right'>
                    <IconButton
                      onClick={() => {
                        setOpen(false);
                        dispatch(editForm(false));
                      }}
                    >
                      <CloseIcon fontSize='small' />
                    </IconButton>
                  </div>
                  <PostEdit post={post} />
                  <Hidden smUp>
                    <div align='right'>
                      <IconButton color='primary' onClick={() => {}}>
                        <ThumbUpIcon fontSize='small' />
                      </IconButton>
                      <IconButton color='secondary' onClick={() => {}}>
                        <ThumbDownIcon fontSize='small' />
                      </IconButton>

                      {post.author.id === authUser.id ? (
                        <span>
                          <IconButton
                            onClick={() => {
                              setSelected(index);
                              setOpen(true);
                              dispatch(editForm(true));
                            }}
                          >
                            <EditIcon fontSize='small' />
                          </IconButton>
                          <IconButton
                            onClick={() =>
                              dispatch(deletePost(post.id, post.author.id))
                            }
                          >
                            <DeleteIcon fontSize='small' />
                          </IconButton>
                        </span>
                      ) : null}
                    </div>
                  </Hidden>
                  <hr />
                  <Comments post={post} />
                </Box>
              </Collapse>
            ) : null}
          </div>
        ))
      ) : (
        <div align='center'>
          <CircularProgress style={{ margin: 50 }} size={60} />
        </div>
      )}

      <div align='center' className={classes.paginateContainer}>
        <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
          <Route>
            {({ location }) => {
              const query = new URLSearchParams(location.search);
              const page = parseInt(query.get('page') || '1', 10);
              return (
                <Pagination
                  page={page}
                  count={10}
                  renderItem={(item) => (
                    <PaginationItem
                      component={Link}
                      to={`/inbox${
                        item.page === 1 ? '' : `?page=${item.page}`
                      }`}
                      {...item}
                    />
                  )}
                />
              );
            }}
          </Route>
        </MemoryRouter>
      </div>
    </div>
  );
}

export default Posts;
