import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './RegistrationPage.css'; // Custom CSS file for styling
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your registration submission logic here
    // You can access the form field values using the state variables
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h2 className="mt-5 text-center">Registration</h2>

          <Form onSubmit={handleSubmit} className="mt-4">
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </FormGroup>
            <Button color="primary" type="submit" className="mt-4">Login</Button>
          </Form>
          <div style={{"display":"flex"}}>
          <p style={{"color":"white"}}>New here? </p>
          <Link to=""> Register</Link>
        </div>
        </Col>
        
      </Row>
    </Container>
  );
};

export default LoginPage;

