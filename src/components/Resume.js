import React, { Fragment } from "react";

const Resume = (props) => {
  if (props.data) {
    var subHeading = props.data.subHeading;
    var text = props.data.text;
    var education = props.data.education.map(function (education) {
      return (
        <div key={education.id} className="resume-item">
          <h4>{education.title}</h4>
          <h6>{education.heading}</h6>
          <h5>{education.timeStamp}</h5>
          <h6>{education.selectedCourse}</h6>
          <p>{education.text}</p>
          <p>{education.awards}</p>
        </div>
      );
    });

    var exp = props.data.exp.map(function (exp) {
      return (
        <div key={exp.id} className="resume-item">
          <h4>{exp.title}</h4>
          {exp.data.map(function (dataOfExp) {
            return (
              <Fragment key={dataOfExp.id}>
                <h6>{dataOfExp.heading}</h6>
                <h5>{dataOfExp.timeStamp}</h5>
                <p>{dataOfExp.text}</p>
                {dataOfExp.link &&
                  <p className="customlink">
                    <a href={dataOfExp.link} className="hyperlink" target="_blank" rel="noopener noreferrer">Research Paper</a>
                  </p>
                }
              </Fragment>
            );
          })}
        </div>
      );
    });
  }
  return (
    <div id="resume" className="resume">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{subHeading}</h1>
          <p className="mainContent">{text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="resume-row">
          <div className="col-lg-6">
            <h3 className="resume-title">Education</h3>
            {education}
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            {exp}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
