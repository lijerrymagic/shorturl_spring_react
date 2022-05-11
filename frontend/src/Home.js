import './App.css';
import React, {useCallback, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';

function isValidURL(string) {
  var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return (res !== null && res !== "");
};

function Home() {
  const navigate = useNavigate();
  const [urlValid, setUrlValid] = useState(true);
  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    const longUrlInput = event.target[0].value
    const isValid = isValidURL(longUrlInput);
    if (!isValid) {
      setUrlValid(false);
      return;
    }
    const payload = {longUrl : longUrlInput}
    const response = await fetch('/shortUrl/create', {
        headers: { 'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(payload) 
      });
    const data = await response.json();

    navigate(`/result`, { state: {shortUrl : data.shortUrl, longUrl : data.longUrl } });
   });

    return (
        <div className="Parent">
          <NavBar/>
          <Container fluid="md" style={{paddingTop: "200px"}}>
            <Row>
              <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label><h2>ShortURL.onL</h2></Form.Label>
                <Form.Control placeholder="" width="50%" isInvalid={!urlValid}/>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid URL.
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                  Enter a long URL you wish to share.
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
                Short it
              </Button>
              </Form> 
            </Row>
        </Container>
        </div>
    );
  }

export default Home;
