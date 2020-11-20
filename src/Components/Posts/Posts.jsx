import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import {
  Avatar,
  Box,
  Button,
  Collapse,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Hidden from '@material-ui/core/Hidden';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ReplyIcon from '@material-ui/icons/Reply';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';

function Posts() {
  const classes = useStyles();
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
                    <Button
                      id={index}
                      color='primary'
                      onClick={() => {
                        setSelected(index);
                        setOpen(!open);
                      }}
                    >
                      <Typography variant='h6'>
                        {post.message.slice(0, 20)}
                      </Typography>
                    </Button>
                    <Typography color='textSecondary'>16/11/2020</Typography>
                  </CardContent>
                </div>
                <div className={classes.postIcons}>
                  <IconButton
                    className={classes.icon}
                    color='primary'
                    size='small'
                    onClick={() => {}}
                  >
                    <ThumbUpIcon fontSize='small' />
                  </IconButton>
                  <IconButton
                    className={classes.icon}
                    color='secondary'
                    size='small'
                    onClick={() => {}}
                  >
                    <ThumbDownIcon fontSize='small' />
                  </IconButton>
                </div>
              </div>

              {selected === index ? (
                <Collapse in={open} timeout='auto' unmountOnExit>
                  <Box margin={2}>
                    <div align='right'>
                      <IconButton onClick={() => setOpen(false)}>
                        <CloseIcon fontSize='small' />
                      </IconButton>
                    </div>
                    <Typography variant='h6'>{post.message}</Typography>

                    <small>Comments</small>

                    <Paper className={classes.commentsLists} elevation={0}>
                      <Typography>This is a sample comment.</Typography>
                      <div align='right'>
                        <IconButton>
                          <ReplyIcon fontSize='small' />
                        </IconButton>
                        <IconButton>
                          <EditIcon fontSize='small' />
                        </IconButton>
                        <IconButton>
                          <DeleteIcon fontSize='small' />
                        </IconButton>
                      </div>
                    </Paper>
                    <hr />

                    <div>
                      <TextField
                        className={classes.commentInput}
                        placeholder='Write comment ...'
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position='start'>
                              <div align='right'>
                                <SendIcon
                                  style={{ cursor: 'pointer' }}
                                  fontSize='small'
                                  color='primary'
                                />
                              </div>
                            </InputAdornment>
                          ),
                        }}
                        variant='outlined'
                        multiline
                        fullWidth
                      />
                    </div>
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
