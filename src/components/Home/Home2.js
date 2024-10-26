import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import myImg from "../../Assets/avatar.svg";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillMail,
  AiFillInstagram,
  AiFillBehanceCircle,
  AiFillGithub,
  AiFillWechat
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with Design and all about Computer and I have at least learn
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in  
              <i>
                <b className="purple"> Design Graphic and UI Design. </b>
              </i>
              <br />
              <br />
              My field of Interest's are  &nbsp;
              <i>
                <b className="purple">Social Media Design, Logo, Poster, and etc </b> and
                also other things in areas related to{" "}
                <b className="purple">
                  Technology and Design.
                </b>
              </i>
              <br />
              <br />
              Software i use are CorelDraw and Figma, but i can use other software like Adobe family too
              Whenever possible, I make design
              with <b className="purple">CorelDraw, and adobe family</b> and for UI design with
              <i>
                <b className="purple">
                  {" "}
                  Figma
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:dwinugroho0799@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/nugdwi_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www."
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillBehanceCircle />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://github.com/Nugrohodwi14"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/6285225502810"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillWechat />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
