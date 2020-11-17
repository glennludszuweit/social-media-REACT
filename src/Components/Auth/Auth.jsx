import { Row, Col } from 'react-bootstrap';
import Login from './Login/Login';
import Register from './Register/Register';

function Auth() {
  return (
    <Row className='my-3'>
      <Col sm={12} md={6} className='my-2'>
        <Login />
      </Col>

      <Col sm={12} md={6} className='my-2'>
        <Register />
      </Col>
    </Row>
  );
}

export default Auth;
