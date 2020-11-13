import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Friends() {
  return (
    <Card>
      <Card.Header
        as='h6'
        style={{ backgroundColor: '#DC3545', color: '#fff' }}
      >
        Friends
      </Card.Header>
      <ListGroup variant='flush'>
        <ListGroup.Item>
          <Link to='/users/1'>Cras justo odio</Link>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Friends;
