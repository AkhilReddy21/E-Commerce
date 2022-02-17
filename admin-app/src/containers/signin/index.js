import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Layout from '../../components/layouts'
import Input from '../../components/UI/input'

const signin = (props) => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
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

export default signin