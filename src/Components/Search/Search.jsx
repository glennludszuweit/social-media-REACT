import { useStyles } from './styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

function Search() {
  const classes = useStyles();

  return (
    <Paper component='form' className={classes.root}>
      <IconButton className={classes.iconButton} aria-label='menu'>
        <MenuIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder='Search'
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton
        type='submit'
        className={classes.iconButton}
        aria-label='search'
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default Search;
