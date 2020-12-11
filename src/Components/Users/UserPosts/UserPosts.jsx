import moment from "moment";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost, editForm } from "../../../Redux/Actions/posts";
import { useStyles } from "./styles";
import PostEdit from "../../Posts/PostEdit/PostEdit";
import Comments from "../../Comments/Comments";
import { Box, CircularProgress, Collapse, IconButton } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Hidden from "@material-ui/core/Hidden";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import CloseIcon from "@material-ui/icons/Close";
import { Pagination } from "@material-ui/lab";

function UserPosts({ posts, authUser, user }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(-1);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(7);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const userPosts = posts.filter((post) => post.author.id === user.id);
  const currentPosts = userPosts.slice(firstPostIndex, lastPostIndex);
  const pageNumbers = [];
  for (
    let index = 1;
    index <= Math.ceil(userPosts.length / postsPerPage);
    index++
  ) {
    pageNumbers.push(index);
  }

  return (
    <div>
      {posts ? (
        currentPosts.map((post, index) => (
          <div className={classes.root} key={index}>
            <div className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Link
                    to="#"
                    id={index}
                    onClick={() => {
                      setSelected(index);
                      setOpen(true);
                      dispatch(editForm(false));
                    }}
                  >
                    <Typography variant="h5">
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
                  <IconButton color="primary" onClick={() => {}}>
                    <ThumbUpIcon fontSize="small" />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => {}}>
                    <ThumbDownIcon fontSize="small" />
                  </IconButton>
                  {post.author.id === authUser.authUserData.id ? (
                    <span>
                      <IconButton
                        onClick={() => {
                          setSelected(index);
                          setOpen(true);
                          dispatch(editForm(true));
                        }}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        onClick={() =>
                          dispatch(deletePost(post.id, post.author.id))
                        }
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </span>
                  ) : null}
                </div>
              </Hidden>
            </div>

            {selected === index ? (
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box margin={2}>
                  <div align="right">
                    <IconButton
                      onClick={() => {
                        setOpen(false);
                        dispatch(editForm(false));
                      }}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </div>
                  <PostEdit post={post} />
                  <Hidden smUp>
                    <div align="right">
                      <IconButton color="primary" onClick={() => {}}>
                        <ThumbUpIcon fontSize="small" />
                      </IconButton>
                      <IconButton color="secondary" onClick={() => {}}>
                        <ThumbDownIcon fontSize="small" />
                      </IconButton>
                      {post.author.id === authUser.authUserData.id ? (
                        <span>
                          <IconButton
                            onClick={() => {
                              setSelected(index);
                              setOpen(true);
                              dispatch(editForm(true));
                            }}
                          >
                            <EditIcon fontSize="small" />
                          </IconButton>
                          <IconButton
                            onClick={() =>
                              dispatch(deletePost(post.id, post.author.id))
                            }
                          >
                            <DeleteIcon fontSize="small" />
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
        <div align="center">
          <CircularProgress style={{ margin: 50 }} size={60} />
        </div>
      )}

      <div align="center" className={classes.paginateContainer}>
        <Pagination
          color="primary"
          page={currentPage}
          count={pageNumbers.length}
          onChange={(event, value) => setCurrentPage(value)}
        />
      </div>
    </div>
  );
}

export default UserPosts;
