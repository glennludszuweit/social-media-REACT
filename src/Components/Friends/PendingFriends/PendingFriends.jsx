import { useStyles } from "./styles";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import { Avatar, CardContent, IconButton } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addFriend, unFriend } from "../../../Redux/Actions/auth";

function PendingFriends({ friendRequests }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return friendRequests.map((request, index) => (
    <div className={classes.root} key={index}>
      <div className={classes.card}>
        {request.avatar ? (
          <Avatar
            className={classes.cardImage}
            alt={request.name}
            src={request.avatar}
          />
        ) : (
          <Avatar
            className={classes.cardImage}
            alt={request.name}
            src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1445&q=80"
          />
        )}

        <div className={classes.cardDetails}>
          <a href={`/users/${request.id}`}>
            <CardContent>{request.name}</CardContent>
          </a>
        </div>

        <div className={classes.postIcons} align="right">
          <IconButton
            color="primary"
            onClick={() => dispatch(addFriend(request.id))}
          >
            <LibraryAddCheckIcon />
          </IconButton>
          <IconButton color="primary" onClick={() => dispatch(unFriend(request.id))}>
            <CancelPresentationIcon />
          </IconButton>
        </div>
      </div>
    </div>
  ));
}

export default PendingFriends;
