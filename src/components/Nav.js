import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import "../css/nav.css"

const Nav = (props) => {
  var navOn = true;
  var width = window.innerWidth;
  if (width <= 1000) {
    navOn = false;
  }
  const [state, setState] = React.useState({navOn: navOn, width: width});
  const handleToggle = () => {
    if (state && window.innerWidth <= 1000) {
      setState({navOn: !state.navOn, width: state.width});
    }
  }
  if (props.data) {
    var imageSource = props.data.imgSource;
    var navigation = props.data.sectionName.map(function (navigation) {
      return (
        <li key={navigation.id} onClick={() => handleToggle()}>
          <a href={navigation.link}>{navigation.name}</a>
        </li>
      );
    });
  }
  var timeout = false;
  window.addEventListener('resize', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (window.innerWidth > 1000 && state.width <= 1000) {
        setState({navOn: !state.navOn, width: window.innerWidth});
      } else if (window.innerWidth <= 1000 && state.width > 1000) {
        setState({navOn: !state.navOn, width: window.innerWidth});
      } else {
        setState({navOn: state.navOn, width: window.innerWidth});
      }
    }, 100);
  });
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              {/* eslint-disable-next-line */}
              <a href="#">
                <img src={imageSource} alt="logo" />
              </a>
            </div>
          </ul>
          {state.navOn ? (
            <ul className="navbar__right">{navigation}</ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState({navOn: !state.navOn, width: state.width})}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;
