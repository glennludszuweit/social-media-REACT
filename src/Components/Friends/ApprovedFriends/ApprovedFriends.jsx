import { useStyles } from "./styles";
import ChatIcon from "@material-ui/icons/Chat";
import { Avatar, CardContent, IconButton } from "@material-ui/core";

function ApprovedFriends({ friends }) {
  const classes = useStyles();

  console.log(friends);

  return friends.map((friend, index) => (
    <div className={classes.root} key={index}>
      <div className={classes.card}>
        {friend.avatar ? (
          <Avatar
            className={classes.cardImage}
            alt={friend.name}
            src={friend.avatar}
          />
        ) : (
          <Avatar
            className={classes.cardImage}
            alt={friend.name}
            src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1445&q=80"
          />
        )}

        <div className={classes.cardDetails}>
          <a href={`/users/${friend.id}`}>
            <CardContent>{friend.name}</CardContent>
          </a>
        </div>

        <div className={classes.postIcons} align="right">
          <IconButton color="primary" onClick={() => {}}>
            <ChatIcon />
          </IconButton>
        </div>
      </div>
    </div>
  ));
}

export default ApprovedFriends;
