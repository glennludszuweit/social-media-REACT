import { Button, Card, Form } from 'react-bootstrap';

function Login() {
  return (
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

          <Button
            className='float-right'
            variant='outline-danger'
            type='submit'
          >
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Login;
