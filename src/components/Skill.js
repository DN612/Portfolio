import React from "react";

const Skill = (props) => {
  if (props.data) {
    var subHeading = props.data.subHeading;
    var text = props.data.text;
    var skillSet1 = props.data.skillSet1.map(function (skillSet1) {
      return (
        <li key={skillSet1.id}>
          <strong>{skillSet1.name}</strong>
          <h6>{skillSet1.percentage}</h6>
          <div className={skillSet1.class}></div>
        </li>
      );
    });
    var skillSet2 = props.data.skillSet2.map(function (skillSet2) {
      return (
        <li key={skillSet2.id}>
          <strong>{skillSet2.name}</strong>
          <h6>{skillSet2.percentage}</h6>
          <div className={skillSet2.class}></div>
        </li>
      );
    });
  }
  return (
    <div id="skill" className="skill">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{subHeading}</h1>
          <p className="mainContent">{text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          <div className="col-6">
            <ul className="skill-bars-fat">{skillSet1}</ul>
          </div>
          <div id="secondSkill" className="col-6">
            <ul className="skill-bars-fat">{skillSet2}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
