import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../../Redux/Actions/comments';
import { useStyles } from './styles';
import {
  IconButton,
  TextField,
  Paper,
  InputAdornment,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import ReplyIcon from '@material-ui/icons/Reply';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function Comments({ post }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [comment, setComment] = useState({
    message: '',
  });

  return (
    <div>
      <small>Comments</small>
      {post.comments.map((comment) => (
        <Paper className={classes.commentsLists} elevation={0}>
          <Typography>
            {comment.message}, {comment.id}
          </Typography>
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
      ))}

      <hr />
      <div>
        <TextField
          className={classes.commentInput}
          placeholder='Write comment ...'
          value={comment.message}
          onChange={(e) => setComment({ message: e.target.value })}
          InputProps={{
            endAdornment: (
              <InputAdornment position='start'>
                <div align='right'>
                  <SendIcon
                    style={{ cursor: 'pointer' }}
                    fontSize='small'
                    color='primary'
                    onClick={() => {
                      dispatch(addComment(post.id, comment));
                      setComment({
                        message: '',
                      });
                    }}
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
    </div>
  );
}

export default Comments;
