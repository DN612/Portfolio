import React from "react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaKaggle, FaLongArrowAltDown } from "react-icons/fa";
import "../css/banner.css"

const Banner = (props) => {
  if (props.data) {
    var title = props.data.title;
    var portfolioLink = props.data.portfolioLink;
    var buttonName = props.data.buttonName;
    var icons = [
      { icon: <FaGithub className="headerIcon" /> },
      { icon: <FaLinkedin className="headerIcon" /> },
      { icon: <FaKaggle className="headerIcon" /> },
    ];
    var social = props.data.social.map(function (social, index) {
      return (
        <li key={social.id}>
          <a href={social.link} target="_blank" rel="noopener noreferrer">
            {icons[index].icon}
          </a>
        </li>
      );
    });
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header__section">
          <h1>{title}</h1>
          <div className="type">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                deleteSpeed: 10
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    'I\'m a <strong><span style="color: #ff4a57;">Master in Financial Engineering Student at Cornell University</span>'
                  )
                  .pauseFor(2000)
                  .deleteChars(64)
                  .typeString(
                    'an incoming <strong><span style="color: #ff4a57;">Machine Learning Analyst in Quantitative Equity Strategies at Kemnay</span>'
                  )
                  .pauseFor(2000)
                  .deleteChars(83)
                  .typeString(
                    've worked as an <strong><span style="color: #ff4a57;">NLP-AI Intern at Sprinklr</span>'
                  )
                  .pauseFor(2000)
                  .deleteChars(28)
                  .typeString(
                    '<strong><span style="color: #ff4a57;"> Computational Finance Intern at IIM-A</span>'
                  )
                  .pauseFor(2000)
                  .start();
              }}
            />
          </div>
          <ul className="header__ul">{social}</ul>
          <div className="header__buttons">
            <a href={portfolioLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              {buttonName}
            </a>
          </div>
        </div>
      </div>
      <div className="downArrow">
        <a className="arrow bounce" href="#about"><FaLongArrowAltDown/></a>
      </div>
    </header>
  );
};

export default Banner;