import './Result.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import NavBar from './NavBar';
import { useLocation } from 'react-router-dom';
import Alert from "react-bootstrap/Alert";
import { useNavigate, Link } from 'react-router-dom';
function Result() {
    const { state } = useLocation();
    const navigate = useNavigate();
    if (!state) {
      navigate(`/404`);
    } else {
      return (
        <div className="Parent">
          <NavBar/>
          <Container fluid="md" style={{paddingTop: "200px"}}>
            <Row>
            <Alert variant="light">
            <Alert.Heading>Here's your shortened URL for {state.longUrl}</Alert.Heading>
            <h1>
              <Alert.Link variant="info" href={"http://" + window.location.host + "/" + state.shortUrl}>{window.location.host + "/" + state.shortUrl}</Alert.Link>
            </h1>
            <hr />
            <p className="mb-0">
              And click <Link to={"/count/" + state.shortUrl}>here</Link> {" "} to see how many times it has been visited.
            </p>
            </Alert>
               
            </Row>
        </Container>
        </div>
    );
    }
    
  }

export default Result;
