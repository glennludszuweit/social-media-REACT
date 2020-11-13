import { Col, Image, Row } from 'react-bootstrap';
import UserPosts from '../Components/Users/UserPosts';
import image from '../logo.svg';

function User() {
  return (
    <Row>
      <Col sm={3} className='my-3'>
        <Image src={image} rounded />
        <p>User Name</p>
        <p>User Location</p>
        <p>Joined on: 8th June 2020</p>
      </Col>
      <Col sm={9} className='my-3'>
        <UserPosts />
      </Col>
    </Row>
  );
}

export default User;
