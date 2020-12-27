import React, { useState, useEffect, Profiler } from "react";
import Carousel from "react-bootstrap/Carousel";

const Leadership = ({ heading, message, img, imageSize }) => {
  return (
    <div
      id="leadership"
      className="jumbotron jumbotron-fluid m-0"
      style={{ backgroundColor: "white" }}
    >
      <div className="container container-fluid">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <div className="row">
          <div className="col-md-5">
            <p className="lead">{message}</p>
          </div>
          <div style={{ color: 'black' }} className="col-md-7">
            <Carousel>
              {img.map((value, index) => {
                return (
                  <Carousel.Item >
                    <img
                      className="d-block w-70"
                      src={value.img}
                      alt="First slide"
                      width={600}
                      height={400}
                      style={{ color: 'black' }}
                    />
                    <Carousel.Caption>
                      <h3 style={{ color: 'black' }}>{value.label}</h3>
                      <p style={{ color: 'black' }}>
                        {value.paragraph}
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
