import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../Redux/Actions/comments';
import { useStyles } from './styles';
import EditComment from './EditComment/EditComment';
import {
  IconButton,
  TextField,
  Paper,
  InputAdornment,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { editForm } from '../../Redux/Actions/comments';

function Comments({ post }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);
  const [selected, setSelected] = useState(-1);
  const [comment, setComment] = useState({
    message: '',
  });

  return (
    <div>
      <small>Comments</small>
      {post.comments.map((comment, index) => (
        <div key={index}>
          {comments.openEditForm && selected === index ? (
            <EditComment post={post} comment={comment} />
          ) : (
            <Paper className={classes.commentsLists} elevation={0}>
              <Typography>
                {comment.message}, {comment.id}
              </Typography>
              <div align='right'>
                <IconButton
                  onClick={() => {
                    dispatch(editForm(true));
                    setSelected(index);
                  }}
                >
                  <EditIcon fontSize='small' />
                </IconButton>
                <IconButton>
                  <DeleteIcon fontSize='small' />
                </IconButton>
              </div>
            </Paper>
          )}
        </div>
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
