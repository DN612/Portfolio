import React from "react";
import "../css/about.css";

const About = (props) => {
  if (props.data) {
    var subHeading = props.data.subHeading;
    var text = props.data.text;
    var aboutMe = props.data.aboutMe;
  }
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{subHeading}</h1>
          <p className="mainContent">{text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="about-row">
          <div className="col-5">
            <div className="about__img">
              <img src="/images/image-profile.jpg" alt="man" />
            </div>
          </div>
          <div className="col-3">
            <div className="about__info">
              <h3>Hi there!</h3>
              <div className="about__info-p1">{aboutMe}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
