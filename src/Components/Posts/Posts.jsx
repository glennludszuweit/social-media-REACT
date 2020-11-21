import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost, editForm } from '../../Redux/Actions/posts.js';
import { useStyles } from './styles';
import PostEdit from './PostEdit/PostEdit';
import Comments from '../Comments/Comments';
import { Avatar, Box, Collapse, IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Hidden from '@material-ui/core/Hidden';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import CloseIcon from '@material-ui/icons/Close';

function Posts() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.postData);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(-1);

  return (
    <Grid item xs={12}>
      {posts
        ? posts.map((post, index) => (
            <Card className={classes.root} key={index}>
              <div className={classes.card}>
                <Hidden xsDown>
                  <Link to={`/users/${post.author}`}>
                    <Avatar
                      className={classes.cardMedia}
                      alt='Remy Sharp'
                      src='https://images.unsplash.com/photo-1536706936563-c9e47fc563df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
                    />
                  </Link>
                </Hidden>
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
                      <Typography variant='h6'>
                        {post.message.slice(0, 20)}
                      </Typography>
                    </Link>
                    <Typography color='textSecondary'>16/11/2020</Typography>
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
                    <IconButton
                      onClick={() => {
                        setSelected(index);
                        setOpen(true);
                        dispatch(editForm(true));
                      }}
                    >
                      <EditIcon fontSize='small' />
                    </IconButton>
                    <IconButton onClick={() => dispatch(deletePost(post.id))}>
                      <DeleteIcon fontSize='small' />
                    </IconButton>
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
                        <IconButton onClick={() => {}}>
                          <EditIcon fontSize='small' />
                        </IconButton>
                        <IconButton
                          onClick={() => dispatch(deletePost(post.id))}
                        >
                          <DeleteIcon fontSize='small' />
                        </IconButton>
                      </div>
                    </Hidden>
                    <hr />
                    <Comments />
                  </Box>
                </Collapse>
              ) : null}
            </Card>
          ))
        : null}
    </Grid>
  );
}

export default Posts;
