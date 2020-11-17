import { Container } from 'react-bootstrap';
import Search from '../Components/Global/Search/Search';
import UsersList from '../Components/Users/UsersList';

function Users() {
  return (
    <Container className='w-75'>
      <Search />
      <UsersList />
    </Container>
  );
}

export default Users;
