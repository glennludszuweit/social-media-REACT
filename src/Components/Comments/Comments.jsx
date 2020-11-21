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

function Comments() {
  const classes = useStyles();

  return (
    <div>
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
    </div>
  );
}

export default Comments;
