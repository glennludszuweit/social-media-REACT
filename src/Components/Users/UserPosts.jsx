import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../../logo.svg';

function UserPosts() {
  return (
    <Card>
      <Card.Header
        as='h6'
        style={{ backgroundColor: '#DC3545', color: '#fff' }}
      >
        Lates Posts
      </Card.Header>

      <ListGroup>
        <ListGroup.Item>
          <Card.Body style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <img src={image} alt='' width='200' />
            </div>
            <div>
              <Card.Title>
                <Link to='/posts/1'>Special title treatment</Link>
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
  );
}

export default UserPosts;
