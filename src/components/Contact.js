import React from "react";
import { FaGithub, FaLinkedin, FaKaggle } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { FiMail, FiPhoneCall } from "react-icons/fi";

const Contact = (props) => {
  if (props.data) {
    var text = props.data.text;
    var imgSource = props.data.imgSource;
    var icons = [
      { icon: <ImLocation className="headerIcon" /> },
      { icon: <FiMail className="headerIcon" /> },
      { icon: <FiPhoneCall className="headerIcon" /> },
    ];
    var info = props.data.info.map(function (info, index) {
      return (
        <div key={info.id} className="row">
          <div className="col-2">
            <li>{icons[index].icon}</li>
          </div>
          <div className="col-8">
            <h2>{info.name}</h2>
            <h4>{info.value}</h4>
          </div>
        </div>
      );
    });
  }
  if (props.social) {
    var icons2 = [
      { icon: <FaGithub className="headerIcon" /> },
      { icon: <FaLinkedin className="headerIcon" /> },
      { icon: <FaKaggle className="headerIcon" /> },
    ];
    var social = props.social.social.map(function (social, index) {
      return (
        <li key={social.id}>
          <a href={social.link} target="_blank" rel="noopener noreferrer">
            {icons2[index].icon}
          </a>
        </li>
      );
    });
  }
  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <ul className="contactCircles2">{info}</ul>
          </div>
          <div className="col-6">
            <div className="contactSection-logo">
              <img src={imgSource} alt="" />
            </div>
            <p>{text}</p>
            <div className="common">
              <div className="commonBorder"></div>
            </div>
            <div className="contactSection">
              <div className="row justifyConter">
                <div className="col-6">
                  <ul className="contactCircles">{social}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
