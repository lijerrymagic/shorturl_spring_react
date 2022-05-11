import './Result.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import NavBar from './NavBar';
import { useLocation } from 'react-router-dom';
import Alert from "react-bootstrap/Alert";
function NotFoundPage() {
    const { state } = useLocation();
    return (
        <div className="Parent">
          <NavBar/>
          <Container fluid="md" style={{paddingTop: "200px"}}>
            <Row>
            <Alert variant="danger">
            <Alert.Heading>404 Not Found</Alert.Heading>
            <p>
                Oops, there's nothing here yet.
            </p>
            <hr />
            </Alert>
               
            </Row>
        </Container>
        </div>
    );
  }

export default NotFoundPage;
