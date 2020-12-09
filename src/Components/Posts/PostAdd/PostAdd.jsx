import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addForm, addPost } from "../../../Redux/Actions/posts";
import { useStyles } from "./styles";
import {
  IconButton,
  InputAdornment,
  Paper,
  TextField,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

function PostAdd() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const auth = useSelector((state) => state.auth);
  const [postData, setPostData] = useState({
    message: "",
  });

  const handleSubmit = () => {
    dispatch(addPost(postData, auth.authUserData.id));
    dispatch(addForm(false));
  };

  return posts.openAddForm ? (
    <Paper elevation={3} className={classes.textField}>
      <TextField
        id="outlined-multiline-static"
        label="Add post"
        multiline
        fullWidth
        required
        rows={10}
        placeholder="add your post here"
        variant="outlined"
        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <div align="right">
                <IconButton onClick={handleSubmit}>
                  <SendIcon
                    style={{ cursor: "pointer" }}
                    fontSize="large"
                    color="primary"
                  />
                </IconButton>
              </div>
            </InputAdornment>
          ),
        }}
      />
      <IconButton
        className={classes.close}
        onClick={() => dispatch(addForm(false))}
      >
        <HighlightOffIcon />
      </IconButton>
    </Paper>
  ) : null;
}

export default PostAdd;
