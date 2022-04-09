import React from "react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaKaggle } from "react-icons/fa";

const Banner = (props) => {
  if (props.data) {
    var title = props.data.title;
    var image = props.data.image;
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
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <h1>{title}</h1>
                <div className="type">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          'I\'m <strong><span style="color: #ff4a57;">Financial Engineering Graduate Student at Cornell, Ithaca</span>'
                        )
                        .pauseFor(2000)
                        .deleteChars(57)
                        .typeString(
                          '<strong><span style="color: #ff4a57;">Ex - Computational Finance Intern at IIM-A</span>'
                        )
                        .pauseFor(2000)
                        .deleteChars(42)
                        .typeString(
                          '<strong><span style="color: #ff4a57;">Ex - Machine Learning Intern at Sprinklr</span>'
                        )
                        .pauseFor(2000)
                        .start();
                    }}
                  />
                </div>
                <ul className="header__ul">{social}</ul>
                <div className="header__buttons">
                  <a href={portfolioLink} className="btn btn-outline">
                    {buttonName}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={image} alt="pic" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
