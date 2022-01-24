import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const login = () => {
  const rout = (e) => {
    window.open("https://accounts.spotify.com/authorize?client_id=de8a029d0f12487ebbced080fe7527e3&redirect_uri=http://localhost:3000/&response_type=token","_self")
  }
  const dataRout =() => {
     let hola = window.location.hash
     let location = hola.indexOf("&")
     console.log('hola', hola.substring(14,location));
    }
    console.log('dataRout',dataRout());
  return (
    <Container >
      <Card>
        <Row className="">
          <Image src='../../public/logo192.png'/>
        </Row>
        <Row className=" text-center">
          <Col>
            <h2> My music app </h2>
            <Button variant="outline-primary" onClick={rout}>Login</Button>{' '}
          </Col>
        </Row>

      </Card>
    </Container>
  )
}

export default login;