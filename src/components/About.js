import React from "react";

const About = (props) => {
  if (props.data) {
    var subHeading = props.data.subHeading;
    var text = props.data.text;
    var aboutMe = props.data.aboutMe;
    var state = props.data.state.map(function (state) {
      return (
        <div key={state.id} className="col-6">
          <strong>{state.title}</strong>
          <p>{state.text}</p>
        </div>
      );
    });
  }
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{subHeading}</h1>
          <p className="mainContent">{text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-5">
            <div className="about__img">
              <img src="/images/image-profile.jpg" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">{aboutMe}</div>
              <div className="info__contacts">
                <div className="row">{state}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
