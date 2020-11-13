import { Container } from 'react-bootstrap';
import UserSearch from '../Components/Users/UserSearch';
import UsersList from '../Components/Users/UsersList';

function Users() {
  return (
    <Container className='w-75'>
      <UserSearch />
      <UsersList />
    </Container>
  );
}

export default Users;
