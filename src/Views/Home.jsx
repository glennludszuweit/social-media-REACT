import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import image from '../logo.svg';

function Home() {
  return (
    <Row>
      <Col sm={8} className='my-3'>
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
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </div>
              </Card.Body>
            </ListGroup.Item>

            <ListGroup.Item>
              <Card.Body style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                  <img src={image} alt='' width='200' />
                </div>
                <div>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </div>
              </Card.Body>
            </ListGroup.Item>

            <ListGroup.Item>
              <Card.Body style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                  <img src={image} alt='' width='200' />
                </div>
                <div>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </div>
              </Card.Body>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
      <Col sm={4} className='my-3'>
        <Card>
          <Card.Header
            as='h6'
            style={{ backgroundColor: '#DC3545', color: '#fff' }}
          >
            Users
          </Card.Header>
          <ListGroup variant='flush'>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>

        <Card className='mt-3'>
          <Card.Header
            as='h6'
            style={{ backgroundColor: '#DC3545', color: '#fff' }}
          >
            Users
          </Card.Header>
          <ListGroup variant='flush'>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
}

export default Home;
