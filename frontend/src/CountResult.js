import './App.css';
import './CountResult.css';
import React, {Component,useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import NavBar from './NavBar';
import Alert from "react-bootstrap/Alert";
import { useParams } from 'react-router-dom';
function CountResult() {
    const params = useParams();
    const [count, setCount] = useState(null);
    useEffect(() => {
        const shortUrl = params.shortUrl;
        // console.log(shortUrl);
        // async function fetchData() {
        //     const response = await fetch('/shortUrl/count/' + shortUrl, {
        //         headers: { 'Accept': 'application/json, text/plain, */*',
        //         'Content-Type': 'application/json' },
        //         method: 'GET',
        //       });
        //       return response;
        //   }
        // const response = fetchData();
        // const data = response.json();
        // setCount(data.count);
      fetch('/shortUrl/count/' + shortUrl, {
        headers: { 'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json' },
        method: 'GET',
      }).then(res => res.json())
        .then(
        (result) => {
          setCount(result.count);;
        },
        (error) => {
          });
      }
      );
    return (
        <div className="Parent">
          <NavBar/>
          <Container fluid="md" style={{paddingTop: "200px"}}>
            <Row>
            <Alert variant="secondary">
              <Alert.Heading>The shortened URL:  {window.location.host + "/" + params.shortUrl} has been visited</Alert.Heading>
              <h2>
                  {count}
              </h2>
              <Alert.Heading>times.</Alert.Heading>
              <hr />
            </Alert>
               
            </Row>
        </Container>
        </div>
    );
  }

export default CountResult;
