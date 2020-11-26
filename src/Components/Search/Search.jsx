import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchUser } from '../../Redux/Actions/users';
import { useStyles } from './styles';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import UserView from '../Users/UserView/UserView';

function Search() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const users = useSelector((state) => state.users.userData);
  const [value, setValue] = useState(null);

  useEffect(() => {
    dispatch(searchUser(value, 'User', 'name'));
  }, [value, dispatch]);

  return (
    <Autocomplete
      className={classes.root}
      freeSolo
      disableClearable
      options={users.map((user) => user)}
      getOptionLabel={(o) => o.name}
      onInputChange={(e) => setValue(e.target.value)}
      onChange={(e, v, r) =>
        r === 'select-option' ? history.push(`/users/${v.id}`) : null
      }
      renderInput={(params) => (
        <TextField
          {...params}
          className={classes.input}
          placeholder='Search user by name'
          margin='normal'
          InputProps={{ ...params.InputProps, type: 'search' }}
        />
      )}
    />
  );
}

export default Search;
