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
            <p className="home-about-body text-center">
              I am a highly skilled and dedicated full-stack developer with
              expertise in the{" "}
              <i>
                <b className="purple">
                  MERN stack (MongoDB, Express.js, React.js, and Node.js).{" "}
                </b>{" "}
              </i>{" "}
              With a strong passion for building scalable and efficient web
              applications, I strive to deliver exceptional results that exceed
              client expectations.
              <br />
              <br />I have extensive experience in building robust and secure
              backend systems using{" "}
              <i>
                <b className="purple">Node.js </b>{" "}
              </i>{" "}
              and{" "}
              <i>
                <b className="purple">Express.js </b>{" "}
              </i>{" "}
              . I am expertised in creating RESTful APIs and implementing
              authentication and authorization mechanisms.
              <br />
              <br />I am also comfortable working with modern frontend
              frameworks, especially
              <i>
                <b className="purple">React.js </b>{" "}
              </i>{" "}
              I have a deep understanding of React principles and can
              efficiently create interactive user interfaces with reusable
              components. I am skilled in implementing state management
              libraries such as Redux and can integrate UI frameworks like
              Material-UI or Bootstrap to enhance the overall user experience.
              &nbsp;
              <br />
              <br />
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
