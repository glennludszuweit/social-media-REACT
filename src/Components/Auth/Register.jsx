import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';

function Register() {
  return (
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

export default Register;
