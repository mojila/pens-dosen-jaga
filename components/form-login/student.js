import React from 'react'
import {
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'

class Student extends React.Component {
    render() {
      return (
        <Form className="p-3">
          <Row>
            <Col>
              <FormGroup>
                <Label className="small">E-mail Student</Label>
                <Input type="email" bsSize={"sm"} required/>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label className="small">Password</Label>
                <Input type="password" bsSize={"sm"} required/>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <input type="checkbox"/> <span className="small">Selalu login ?</span>
            </Col>
            <Col md="6">
              <Button color="primary" size="sm" className="shadow" block>Login</Button>
            </Col>
          </Row>
        </Form>
      );
    }
  }

  export default Student