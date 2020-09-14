import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import LoginPage from './LoginPage'


function RegistrationPage() {
  
  return (
    <div>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" valid/>
              <FormFeedback>Sucess</FormFeedback>
              <FormText>Please fill this</FormText>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" valid/>
              <FormFeedback>Sucess</FormFeedback>
              <FormText>Please fill this</FormText>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St" valid/>
          <FormFeedback>Sucess</FormFeedback>
          <FormText>Please fill this</FormText>
        </FormGroup>      
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input type="text" name="city" id="exampleCity"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input type="text" name="state" id="exampleState"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input type="text" name="zip" id="exampleZip" valid/>
              <FormFeedback>Sucess</FormFeedback>
              <FormText>Please fill this</FormText>
            </FormGroup>  
          </Col>
        </Row>
        <FormGroup check>
          <Input type="checkbox" name="check" id="exampleCheck" valid/>
          <FormFeedback>Sucess</FormFeedback>
          <FormText>Please fill this</FormText>
          <Label for="exampleCheck" check>Check me out</Label>
        </FormGroup>
        <Button color="success" onClick={LoginPage}>Register</Button>
      </Form>
    </div>
  );
}
export default RegistrationPage;