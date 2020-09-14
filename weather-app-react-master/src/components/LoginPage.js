import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import App from './App';

function LoginPage(){
  
  return (
    <div>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup check>
          <Input type="checkbox" name="check" id="exampleCheck"/>
          <Label for="exampleCheck" check>Check me out</Label>
        </FormGroup>
        <Button color="success" onClick={App}>Sign in</Button>
      </Form>
    </div>
  );
}
export default LoginPage;