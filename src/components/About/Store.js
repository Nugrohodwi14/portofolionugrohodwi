import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import laptopImg from "../../Assets/about.png";
import Aboutcard from "./AboutCard";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Store(){
    return (
    <Container>
      <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            
            <Col xs={5} md={11} className="store-carrousel">
                <img src={laptopImg} alt="about" className="img-fluid" />
                
            </Col>

          </Col>
          
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">Redbubble</strong>
            </h1>
            <Aboutcard />
          </Col>
        </Row>
    </Container>
  );
}

export default Store;