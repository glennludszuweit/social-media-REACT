import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { register } from '../../../Redux/Actions/auth';

function Register() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData));
  };

  return (
    <Card>
      <Card.Header style={{ backgroundColor: '#DC3545', color: '#fff' }}>
        Register
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Name'
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
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
