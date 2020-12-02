import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../../Redux/Actions/users';

function UserInfo({ user, authUser }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <button
        onClick={() => {
          dispatch(deleteUser(user.id, authUser.token));
        }}
      >
        delete account
      </button>
    </div>
  );
}

export default UserInfo;
