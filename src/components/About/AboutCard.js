import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chandrakala </span>
            from <span className="purple"> </span> <span>Bengaluru.</span>
            <br />
            I'm a seasoned software developer with more than 2 years of IT
            experience from top MNCs.
            <br />
            <br />
            Along with coding, here are some fun activities I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Simplifying complex concepts through my technical
              blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring the underrated spots around the city
            </li>
            <li className="about-activity">
              <ImPointRight /> Active participant in city youth club
            </li>
            <li className="about-activity">
              <ImPointRight /> I love exploring new recipes
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Curiosity is visualizing the same concept in different dimensions"{" "}
          </p>
          <footer className="blockquote-footer">Chandrakala P</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
