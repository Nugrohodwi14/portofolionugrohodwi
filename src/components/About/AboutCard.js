import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nugroho Dwi Yulianto </span>
            from <span className="purple"> Jepara, Indonesia.</span>
            <br />I am a Graphic and UI Designer.
            <br />
            <br />
            Apart from Design, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Sleep
            </li> */}
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Start with Bismillah End with Alhamdulillah"{" "}
          </p>
          <footer className="blockquote-footer">Nugroho Dwi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
