import { useDispatch } from "react-redux";
import { useStyles } from "./styles";
import ChatIcon from "@material-ui/icons/Chat";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Button, Grid } from "@material-ui/core";
import UserUpdate from "../UserUpdate/UserUpdate";
import { addFriendUser } from "../../../Redux/Actions/users";

function UserInfo({ user, authUser }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const userFriendsId = authUser.authUserData.friends.map((x) => x.id);
  const userFriendRequestsSent = authUser.authUserData.friendRequestsSent;

  return user.id === authUser.authUserData.id ? (
    <UserUpdate user={user} authUser={authUser} />
  ) : (
    <div>
      <Grid container className={classes.userInfo}>
        <Grid item xs={12} sm={6}>
          {user.avatar ? (
            <img
              className={classes.userImage}
              src={user.avatar}
              alt={user.name}
            />
          ) : (
            <img
              className={classes.userImage}
              src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1445&q=80"
              alt={user.name}
            />
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <h3>{user.name}</h3>
          <h3>{user.email}</h3>
        </Grid>
      </Grid>
      <div className={classes.userButtons}>
        {userFriendsId.includes(user.id) ? (
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<PersonAddIcon />}
            onClick={() => dispatch(addFriendUser(user.id))}
          >
            Unfriend
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<PersonAddIcon />}
            onClick={() => dispatch(addFriendUser(user.id))}
            disabled={userFriendRequestsSent.includes(user.id)}
          >
            Add Friend
          </Button>
        )}
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<ChatIcon />}
        >
          Message
        </Button>
      </div>
    </div>
  );
}

export default UserInfo;
