import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, searchUser } from '../../Redux/Actions/users';
import { useStyles } from './styles';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Search() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const users = useSelector((state) => state.users.searchedUser);
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
      onChange={(e, v, r) => {
        e.preventDefault();
        if (r === 'select-option') history.push(`/users/${v.id}`);
      }}
      renderInput={(params) => (
        <TextField
          className={classes.input}
          {...params}
          size='small'
          variant='outlined'
          placeholder='Search user by name'
          margin='normal'
          InputProps={{ ...params.InputProps, type: 'search' }}
        />
      )}
    />
  );
}

export default Search;
