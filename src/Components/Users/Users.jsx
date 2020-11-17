import { Container, ListGroup, Card } from 'react-bootstrap';
import Search from '../Global/Search/Search';
import image from '../../logo.svg';
import { Link } from 'react-router-dom';

function Users() {
  return (
    <Container className='w-75'>
      <Search />
      <Card>
        <Card.Header
          as='h6'
          style={{ backgroundColor: '#DC3545', color: '#fff' }}
        >
          Users
        </Card.Header>

        <ListGroup>
          <ListGroup.Item>
            <Card.Body style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <img src={image} alt='' width='200' />
              </div>
              <div>
                <Card.Title>
                  <Link to='/users/1'>Special title treatment</Link>
                </Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
              </div>
            </Card.Body>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
}

export default Users;
