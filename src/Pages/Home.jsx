import { Col, Row } from 'react-bootstrap';
import AllPosts from '../Components/Home/AllPosts';
import Friends from '../Components/Home/Friends';

function Home() {
  return (
    <Row>
      <Col sm={8} className='my-3'>
        <AllPosts />
      </Col>
      <Col sm={4} className='my-3'>
        <Friends />
      </Col>
    </Row>
  );
}

export default Home;
