import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useStyles } from './styles';
import { TextField, InputAdornment } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { editForm } from '../../../Redux/Actions/comments';

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
        defaultValue={comment.message}
        onChange={(e) => setCommentMessage({ message: e.target.value })}
        InputProps={{
          endAdornment: (
            <InputAdornment position='start'>
              <div align='right'>
                <SendIcon
                  style={{ cursor: 'pointer' }}
                  fontSize='small'
                  color='primary'
                  onClick={() => {
                    dispatch(editForm(false));
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
