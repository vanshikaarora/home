import React, { useState, useEffect, Profiler } from "react";
import gsoc from "../../editable-stuff/gsoc.png";
import Microsoft from "../../editable-stuff/microsoft.png"
import Bobble from "../../editable-stuff/bobble.png"
const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Experience = () => {
return (
    <div id="experience" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 mb-5 text-center">Experience</h1>
            {/* <h1 className="display-4 pb-5">Experience</h1> */}
            <div className="row" style={divStyle}>
                <div className="col text-center" >
                    <img
                        // className="border border-secondary rounded-circle"
                        src={Microsoft}
                        alt="microsft logo"
                        width="300"
                        height="70"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Software Engineer Intern  
                        <br/>
                        May - July 2019 & May -July 2020
                    </p>
                </div>
                <div className="col text-center">
                    <img
                        // className="border border-secondary rounded-circle"
                        src={gsoc}
                        alt="gsoc logo"
                        width="400"
                        height="90"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        GSoC'19 Student at Wikimedia Commons
                        <br/>
                        May - August 2019
                    </p>
                </div>
                <div className="col text-center">
                    <img
                        // className="border border-secondary rounded-circle"
                        src={Bobble}
                        alt="boblle logo"
                        width="260"
                        height="90"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Bobble AI Technologies
                        <br/>
                        Dec'18- Jan'19
                    </p>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
