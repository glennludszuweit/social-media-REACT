import { useStyles } from "./styles";
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import { Avatar, CardContent, IconButton } from "@material-ui/core";

function PendingFriends() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <Avatar className={classes.cardImage}
          alt="Remy Sharp"
          src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1445&q=80"
        />
        <div className={classes.cardDetails}>
          <CardContent>
            Friend Name
          </CardContent>
        </div>

        <div className={classes.postIcons} align='right'>
          <IconButton color="primary" onClick={() => {}}>
            <LibraryAddCheckIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default PendingFriends;
