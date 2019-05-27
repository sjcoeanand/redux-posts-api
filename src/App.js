import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/PostForm';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <Container className="app">
        <Row>
          <Col>
            <PostForm/>
            <hr/>
            <Posts/>
          </Col>
        </Row>
      </Container>
    </Provider>
  );
}

export default App;
