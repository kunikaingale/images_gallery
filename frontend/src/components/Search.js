import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
const Search = ({ word, image, setWord }) => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Form onSubmit={image}>
            <Form.Row>
              <Col xs={9}>
                <Form.Control
                  width={400}
                  height={40}
                  placeholder="Search for an image..."
                  type="text"
                  id="my_Input"
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                />
              </Col>

              <Col>
                <Button
                  onClick={() => word=''}
                  type="submit"
                  variant="info"
                >
                  Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Search;




