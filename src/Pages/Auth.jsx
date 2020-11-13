import { Row, Col } from 'react-bootstrap';
import Login from '../Components/Auth/Login';
import Register from '../Components/Auth/Register';

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
