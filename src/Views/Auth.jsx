import { Form, Button, Row, Col, Card } from 'react-bootstrap';

function Auth() {
  return (
    <Row className='my-3'>
      <Col sm={12} md={6} className='my-2'>
        <Card>
          <Card.Header style={{ backgroundColor: '#DC3545', color: '#fff' }}>
            Login
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>

              <Button className='float-right' variant='danger' type='submit'>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>

      <Col sm={12} md={6} className='my-2'>
        <Card>
          <Card.Header style={{ backgroundColor: '#DC3545', color: '#fff' }}>
            Register
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder='Name' />
              </Form.Group>

              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control type='password' placeholder='Repeat Password' />
              </Form.Group>

              <Button className='float-right' variant='danger' type='submit'>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Auth;
