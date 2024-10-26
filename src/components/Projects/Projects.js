import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import PlantCare from "../../Assets/Projects/UI_PlantCare_MobileApp.png";
import LuthfiJati from "../../Assets/Projects/UI_LuthfiJatiFurniture.png";
import Agustusan from "../../Assets/Projects/UI_Landing17Agustus.png";
import HealthApp from "../../Assets/Projects/Concept_HealtApp.png";

import Eagle from "../../Assets/Projects/designGraphic/eagle.png";
import FlatLotus from "../../Assets/Projects/designGraphic/flat lotus.jpg";
import Japan from "../../Assets/Projects/designGraphic/japan.png";
import MoonCat from "../../Assets/Projects/designGraphic/moonCat.png";
import Nd from "../../Assets/Projects/designGraphic/nd.png";
import Note from "../../Assets/Projects/designGraphic/note.png";
import Snake from "../../Assets/Projects/designGraphic/snake.png";
import Summer from "../../Assets/Projects/designGraphic/summer.jpg";
import TeaButton from "../../Assets/Projects/designGraphic/teaButton.png";
import Tengu from "../../Assets/Projects/designGraphic/tengu.png";
import Winter from "../../Assets/Projects/designGraphic/winter.jpg";

import Smt from "../../Assets/Projects/Socmed/smt.png";
import PenaYatim from "../../Assets/Projects/Socmed/penayatim.png";
import Tanyafikh from "../../Assets/Projects/Socmed/tanyafikh.png";
import SeratusDigital from "../../Assets/Projects/Socmed/seratusdigital.png";

import Film from "../../Assets/Projects/code/film.png";
import Course from "../../Assets/Projects/code/course.png";
import Gym from "../../Assets/Projects/code/gym.png";
import LuthfiJatiApp from "../../Assets/Projects/code/luthfiJati.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        
        <h5 className="project-subheading">
          UI <strong className="purple">Design </strong>
        </h5>
        
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PlantCare}
              isBlog={false}
              title="UI Plants Care Mobile App"
              description="UI Bangkit Capstone Final Project Plants Care Mobile App. This application helps   ordinary people to find out the type of plant by just taking a photo of it. assisted by machine learning algorithms and cloud computing that are connected to each other "
              //ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LuthfiJati}
              isBlog={false}
              title="UI Web Landing Page Luthfi Jati"
              description="The purpose of this web is to make it easier for buyers and shops to carry out the buying and selling process., and to introduce Luthfi jati as a shop who selling good furniture"
              //ghLink="https://github.com/soumyajit4419/Editor.io"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Agustusan}
              isBlog={false}
              title="Concept UI Web Landing Page 17 Agustus"
              description="Creating the flow of a website, and designing the user interface. The background for making this website is not only to complete internship assignments but also to enliven the 17 August event. And to make the event easier, this website was created."
              //ghLink="https://github.com/soumyajit4419/Plant_AI"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HealthApp}
              isBlog={false}
              title="Concept UI Health App"
              description="About app : The purpose of this app is to help some people who have struggle about their diet program and to make healthier lifestyle. The Problem : the main problem in this project is to make easier for some people with their diet program and also to make easier to have a healthy lifestyle. The Solution : a mobile based application that can be used by anyone, anywhere, in the application contains various information about how to live a healthy life, such as sport, healthy food, and tips and trick with healthier lifestyle"
              //ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>

      <Container>
          <h5 className="project-subheading">
            <strong className="purple">Grapich Design </strong>
          </h5>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={TeaButton}
                isBlog={false}
                title="Tea Button Logo Concept"
                //ghLink="https://github.com/soumyajit4419/Chatify"
                instagramLink="https://www.instagram.com/p/CF8mO5Vs1Np/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={FlatLotus}
                isBlog={false}
                title="The Flat Lotus Logo Concept"
                //ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
                shutterstockLink="https://www.shutterstock.com/image-illustration/flat-lotus-logo-concept-1900505098"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Japan}
                isBlog={false}
                title="'The Mount of Japan' with mount and japan flag background"
                //ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
                shutterstockLink="https://www.shutterstock.com/image-vector/mount-japan-flag-background-2091500410"
                demoLink="https://www.designbyhumans.com/shop/phone-case/fuji-montain-with-japans-flag/1812297/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={MoonCat}
                isBlog={false}
                title="Moon and Cat"
                //ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
                demoLink="https://www.designbyhumans.com/shop/phone-case/moon-and-cat/1821413/"
                instagramLink="https://www.instagram.com/p/COj2fUpMfnF/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Nd}
                isBlog={false}
                title="Letter N D Logo Concept"
                //ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
                instagramLink="https://www.instagram.com/p/CF4ePbQMeW5/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Note}
                isBlog={false}
                title="Note Logo Concept"
                //ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
                demoLink="https://www.designbyhumans.com/shop/t-shirt/men/note-music-and-songs/1834350/"
                shutterstockLink="https://www.shutterstock.com/image-vector/note-logo-concept-music-song-ornament-2154782729"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Summer}
                isBlog={false}
                title="Letter 'Summer' and Shining Sun at Background in Flat Design"
                //ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
                shutterstockLink="https://www.shutterstock.com/image-vector/letter-summer-shining-sun-background-flat-2096183224"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Eagle}
                isBlog={false}
                title="The king of bird 'Eagle' logo design"
                //ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
                demoLink="https://www.shutterstock.com/image-vector/king-bird-eagle-logo-design-1897021519"
                instagramLink="https://www.instagram.com/p/B_NNQ-lp-8d/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Winter}
                isBlog={false}
                title="Letter 'Winter' and Sprinkle Snow at Background in Flat Design"
                //ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
                shutterstockLink="https://www.shutterstock.com/image-vector/letter-winter-sprinkle-snow-background-flat-2096484625"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Tengu}
                isBlog={false}
                title="Mask Japanese Tengu"
                //ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
                demoLink="https://www.designbyhumans.com/shop/phone-case/mask-japanese-tengu-with-letter-tengu-in-kanji-with-red-white/1819627/"
                shutterstockLink="https://www.shutterstock.com/image-vector/mask-japanese-tengu-letter-kanji-red-2135313829"
              />
            </Col>
            </Row>
      </Container>

      <Container>
          <h5 className="project-subheading">
              Social Media <strong className="purple">Design </strong>
          </h5>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={PenaYatim}
                isBlog={false}
                title="Social Media Design Penayatim"
                description=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Smt}
                isBlog={false}
                title="Social Media Design Seven Media Technology"
                description=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Tanyafikh}
                isBlog={false}
                title="Social Media Design Tanyafikh"
                description=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={SeratusDigital}
                isBlog={false}
                title="Social Media Design Seratus Digital"
                description=""
              />
            </Col>
            </Row>
      </Container>

      <Container>
          <h5 className="project-subheading">
            <strong className="purple">Code </strong>
          </h5>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Film}
                isBlog={false}
                title="Simple Front End Website Film with API TMDB"
                description="This is a simple front end website for watching movies made using React Js and TMDB as API"
                githubLink="https://github.com/Nugrohodwi14/web-film"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={LuthfiJatiApp}
                isBlog={false}
                title="Thesis - Mobile Based E-Commerce Application Design : A case study at Luthfi Jati Jepara"
                description="The purpose of this application is to make it easier for buyers and shops to carry out the buying and selling process. And to make this easy, added features such as, recording every existing transaction, and making reports needed by admins and shop owners. this app using java programming language and as a database use firebase realtime."
                githubLink="https://github.com/Nugrohodwi14/eCommerce"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Gym}
                isBlog={false}
                title="Front End Web Gym"
                description="A landing page website of gym club, inculding a home, progress, why us, etc. Made using React Js, HTML, and CSS"
                githubLink="https://github.com/Nugrohodwi14/web-gym"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Course}
                isBlog={false}
                title="Website Course CRUD"
                description="This is a simple CRUD website for studying. Using CodeIgnitor as a framework"
                githubLink="https://github.com/Nugrohodwi14/course-web-ci"
              />
            </Col>
            </Row>
      </Container>

    </Container>
  );  
}

export default Projects;
