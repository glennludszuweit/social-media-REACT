import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editForm } from '../../../Redux/Actions/posts';
import { useStyles } from './styles';
import {
  IconButton,
  InputAdornment,
  Paper,
  TextField,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function EditPost({ post }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [postData, setPostData] = useState({
    message: '',
  });

  const handleSubmit = () => {
    dispatch(editForm(false));
  };

  return posts.openEditForm ? (
    <Paper className={classes.textField}>
      <TextField
        id='outlined-multiline-static'
        border='0'
        multiline
        fullWidth
        rows={10}
        defaultValue={post.message}
        variant='outlined'
        className={
          (classes.cssOutlinedInput, classes.cssFocused, classes.notchedOutline)
        }
        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
        InputProps={{
          endAdornment: (
            <InputAdornment position='start'>
              <div align='right'>
                <IconButton onClick={handleSubmit}>
                  <SendIcon
                    style={{ cursor: 'pointer' }}
                    fontSize='large'
                    color='primary'
                  />
                </IconButton>
              </div>
            </InputAdornment>
          ),
        }}
      />
      <IconButton
        className={classes.close}
        onClick={() => dispatch(editForm(false))}
      >
        <HighlightOffIcon />
      </IconButton>
    </Paper>
  ) : (
    <Typography variant='h6'>{post.message}</Typography>
  );
}

export default EditPost;
