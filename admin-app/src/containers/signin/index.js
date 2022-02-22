import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Layout from '../../components/layouts'
import Input from '../../components/UI/input'
import { useDispatch } from 'react-redux';
import { login } from '../../actions';



const Signin = (props) => {

  const dispatch = useDispatch();

  const userLogin = (e) => {

    e.preventDefault();

    const user = {
      email: 'Akhil@gmail.com',
      password: '123456'
    }

    dispatch(login(user));
  }

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input
                controlId="formEmail"
                label="Email"
                placeholder="Email"
                value=""
                type="email"
                onChange={() => { }}
              />
              <Input
                controlId="formPassword"
                label="Password"
                placeholder="Password"
                value=""
                type="password"
                onChange={() => { }}
              />

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>

      </Container>
    </Layout>
  )
}

export default Signin;