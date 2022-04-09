import React from "react";
import ReactCardCarousel from "react-card-carousel";

const Awards = (props) => {
  var awardsContainer = {
    height: "50vh",
    width: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 0,
  };
  var styling = {
    height: "300px",
    width: "300px",
    padding: "30px",
    textAlign: "center",
    background: "#d9a5b3",
    color: "#0d1137",
    fontFamily: "sans-serif",
    borderRadius: "10px",
    boxSizing: "border-box",
    zIndex: 0,
    cursor: "pointer",
    alignItems: "center",
  };
  if (props.data) {
    var subHeading = props.data.subHeading;
    var text = props.data.text;
    var firstChild = props.data.firstChild;
    var achv = props.data.achv.map(function (achv) {
      return (
        <div id={achv.id} key={achv.id} style={styling}>
          <h3>{achv.name}</h3>
        </div>
      );
    });
  }

  return (
    <div id="awards" className="awards">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{subHeading}</h1>
          <p className="mainContent">{text}</p>
          <div className="commonBorder"></div>
        </div>
        <div style={awardsContainer}>
          <ReactCardCarousel autoplay={true} autoplay_speed={5000}>
            <div id="item4" style={styling}>
              <h3>{firstChild}</h3>
            </div>
            {achv}
          </ReactCardCarousel>
        </div>
      </div>
    </div>
  );
};

export default Awards;
