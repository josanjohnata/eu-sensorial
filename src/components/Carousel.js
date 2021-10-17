import React from "react";
import ReactPlayer from "react-player";
import "../style/Carousel.css";
import { Carousel, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CarouselComponent() {
  return (
    <Col className="container">
      <Carousel>
        <Carousel.Item>
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=iCDFsOX88LE"
              width="70%"
              height="70%"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url="https://youtu.be/aSDvUkDSznc"
              width="70%"
              height="70%"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url="https://youtu.be/BrddWKyUfDM"
              width="70%"
              height="70%"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url="https://youtu.be/cobEkyVEeL8"
              width="70%"
              height="70%"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </Col>
  );
}

export default CarouselComponent;
