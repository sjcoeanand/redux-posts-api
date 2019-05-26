import React from 'react';
import {Container, Row, Col } from 'reactstrap';
import './App.css';

import Posts from './components/Posts';
import PostForm from './components/PostForm';

function App() {
  return (
    <Container className="app">
      <Row>
        <Col>
          <PostForm/>
          <hr/>
          <Posts/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
