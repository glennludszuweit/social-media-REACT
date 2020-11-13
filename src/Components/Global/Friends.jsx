import { Card, ListGroup } from 'react-bootstrap';

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
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Friends;
