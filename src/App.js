import React, { Component } from 'react';
import Header from './components/Headers';
import { BrowserRouter, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Page from './Active_link';
import Home from './components/Home';
import Explore from './components/Explore';
import Messages from './components/Messages';
import Notification from './components/Notification';
import './App.scss';


export default class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <Container fluid={false}>
        <Row>
          <Col lg={3}><Header /></Col>
          <Col lg={6} className="content">
            <Route
              exact
              path="/"
              
              render={props => (
                <Page {...props} component={Home} title="Home" />
            )}
            />
            <Route
              path="/explore"
                render={props => (
                  <Page {...props} component={Explore} title="Explore" />
              )}
            />
            <Route
              path="/notification"
                render={props => (
                  <Page {...props} component={Notification} title="Notification" />
              )}
            />
            <Route
              path="/messages"
                render={props => (
                  <Page {...props} component={Messages} title="Messages" />
              )}
            />
          </Col>
          <Col lg={3}>Something should comes up for this part.</Col>
        </Row>
      </Container>
    </BrowserRouter>
    )
  }
}


