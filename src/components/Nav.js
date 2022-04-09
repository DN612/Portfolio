import React from "react";
import { FaAlignJustify } from "react-icons/fa";
const Nav = (props) => {
  var navigationWidth = true;
  if (window.innerWidth < 400) {
    navigationWidth = false;
  }
  const [state, setState] = React.useState(navigationWidth);
  if (props.data) {
    var imageSource = props.data.imgSource;
    var navigation = props.data.sectionName.map(function (navigation) {
      return (
        <li key={navigation.id}>
          <a href={navigation.link}>{navigation.name}</a>
        </li>
      );
    });
  }
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
          {state && !state.nav2 ? (
            <ul className="navbar__right">{navigation}</ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;
