import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillMail } from "react-icons/ai";
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
              I am a highly skilled and dedicated full-stack developer with expertise in the MERN stack (MongoDB, Express.js, React.js, and Node.js). With a strong passion for building scalable and efficient web applications, I strive to deliver exceptional results that exceed client expectations.
              <br />
              <br />
              I'm proficient in&nbsp;
              <i>
                <b className="purple">
                  {" "}
                  Backend Development:
                  I have extensive experience in building robust and secure backend systems using Node.js and Express.js. I am proficient in creating RESTful APIs and implementing authentication and authorization mechanisms. {" "}
                </b>
              </i>
              <br />
              <br />
              Frontend Development:
              I am well-versed in modern frontend technologies, particularly React.js. I have a deep understanding of React principles and can efficiently create interactive user interfaces with reusable components. I am proficient in state management libraries such as Redux and can integrate UI frameworks like Material-UI or Bootstrap to enhance the overall user experience.  &nbsp;
              <i>
                <b className="purple">Secure Smart Contracts, </b>{" "}
                <b className="purple">
                  valuable NFTs on top of evolving Chainlink Integrations .
                </b>
              </i>
              <br />
              <br />
              I'm passionate about developing smart contracts which
              revolutionalize the way we interact with systems using{" "}
              <b className="purple">Solidity</b> on
              <i>
                <b className="purple"> Ethereum based Blockchain Systems</b>
              </i>
              &nbsp;
              <i>
                <b className="purple"></b>
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
            <h1>PING ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/chandrakala-p"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chandrakalap/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:chandrakalapr11@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
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
