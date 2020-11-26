import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editPost } from '../../../Redux/Actions/posts';
import { editForm } from '../../../Redux/Actions/comments';
import { useStyles } from './styles';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function EditComment({ post, comment }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [commentMessage, setCommentMessage] = useState({
    message: '',
  });

  return (
    <div>
      <TextField
        className={classes.commentInput}
        placeholder='Write comment ...'
        rows={3}
        defaultValue={comment.message}
        onChange={(e) => setCommentMessage({ message: e.target.value })}
        InputProps={{
          endAdornment: (
            <InputAdornment position='start'>
              <div align='right'>
                <IconButton
                  style={{ marginRight: 10 }}
                  onClick={() => dispatch(editForm(false))}
                >
                  <HighlightOffIcon />
                </IconButton>
                <SendIcon
                  style={{ cursor: 'pointer' }}
                  fontSize='small'
                  color='primary'
                  onClick={() => {
                    dispatch(editForm(false));
                    dispatch(editPost(comment.id, commentMessage));
                    setCommentMessage({
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
  );
}

export default EditComment;
