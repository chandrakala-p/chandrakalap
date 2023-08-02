import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.jpg";
import chatify from "../../Assets/Projects/chatify.png";
import page from "../../Assets/Projects/page.PNG";
import bitsOfCode from "../../Assets/Projects/blog.png";
import shopify from "../../Assets/Projects/shopify.png";
import crowdfunding from "../../Assets/Projects/crowdfunding.jpg";
import paytm from "../../Assets/Projects/paytm.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on to solve a real life problem.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={page}
              isBlog={false}
              title="E-commerce-MERN-app"
              description="The T-Shirt Store is a full-featured e-commerce web application that I built with a MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. This application provides a comprehensive platform for both admins and users, with a plethora of features designed to streamline the buying and selling process for T-shirts."
              ghLink="https://github.com/chandrakala-p/E-commerce-MERN-app"
              demoLink="https://remix.ethereum.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="React-shopping-cart-app"
              description="This project showcases a shopping cart frontend application, which has been meticulously designed and developed to mimic all the cart operations a user might experience on an online e-commerce store. It's a comprehensive demonstration of how a user-friendly, interactive, and effective shopping cart should function."
              ghLink="https://github.com/chandrakala-p/React-shopping-cart-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crowdfunding}
              isBlog={false}
              title="DYT App"
              description=""
              ghLink="https://github.com/chandrakala-p/Do-your-task-DYT-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paytm}
              isBlog={false}
              title="paytm-clone"
              description="This project presents a carefully designed and implemented replica of the Paytm landing page. The primary objective is to illustrate proficiency in frontend design using HTML and Tailwind CSS. The result is a clean, responsive, and user-friendly interface that mimics the look and feel of the original Paytm landing page."
              ghLink="https://github.com/chandrakala-p/paytm-clone"
              demoLink="https://pay-tm-clone.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopify}
              isBlog={false}
              title="shopify.io-clone"
              description="This project implements a replica of the Shopify landing page. The primary objective is to illustrate my proficiency in frontend design using HTML and Tailwind CSS. The result is a clean, responsive, and user-friendly interface that mimics the look and feel of the original Shopify landing page."
              ghLink="https://github.com/chandrakala-p/shopify.io-clone"
              demoLink="https://shopi-fy-clone.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Tourista - Android Geofencing Application"
              description="Tourista is an android based geofencing prototype application designed keeping the safety of tourists in mind. It alerts them while entering restricted areas, thereby avoiding entry to unauthorized zones. The project was build using Android Studio IDE, Java, Firebase Integration and few Google APIs."
              ghLink="https://github.com/chandrakala-p/Tourista"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
