import { Col, Row } from 'react-bootstrap';
import Posts from '../Posts/Posts';
import Friends from '../Global/Friends/Friends';

function Home() {
  return (
    <Row>
      <Col sm={8} className='my-3'>
        <Posts />
      </Col>
      <Col sm={4} className='my-3'>
        <Friends />
      </Col>
    </Row>
  );
}

export default Home;
