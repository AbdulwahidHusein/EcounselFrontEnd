import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './RegistrationPage.css'; // Custom CSS file for styling
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [region, setRegion] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
              <Label for="firstName">First Name</Label>
              <Input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="age">Age</Label>
              <Input
                type="number"
                id="age"
                value={age}
                onChange={(event) => setAge(event.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="gender">Gender</Label>
              <Input
                type="select"
                id="gender"
                value={gender}
                onChange={(event) => setGender(event.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="address">Address</Label>
              <Input
                type="text"
                id="address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="region">Region</Label>
              <Input
                type="text"
                id="region"
                value={region}
                onChange={(event) => setRegion(event.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="postalCode">Postal Code</Label>
              <Input
                type="text"
                id="postalCode"
                value={postalCode}
                onChange={(event) => setPostalCode(event.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="profilePicture">Profile Picture</Label>
              <Input
                type="file"
                id="profilePicture"
                accept="image/*"
                onChange={(event) => setProfilePicture(event.target.value)}
              />
            </FormGroup>

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
              <Label for="phoneNumber">Phone Number</Label>
              <Input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
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

            <FormGroup>
              <Label for="confirmPassword">Confirm Password</Label>
              <Input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </FormGroup>

            <Button color="primary" type="submit" className="mt-4">Register</Button>
          </Form>
          <div style={{"display":"flex"}}>
          <p style={{"color":"white"}}>Already have an account?</p>
          <Link to="/login"> Login</Link>
        </div>
        </Col>
        
      </Row>
    </Container>
  );
};

export default RegistrationPage;

