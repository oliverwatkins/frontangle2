import React from "react";

import './style.less';

export default class WelcomePage extends React.Component {

  render() {
    const homePage = {
      display: "flex",
      width: "100%"
    };
    const homePageLeft = {
      display: "flex",
      width: "50%",
      flexGrow: 1
    };
    const homePageRight = {
      width: "50%",
      height: "500px",
      flexGrow: 1,
      backgroundImage: "url('../../img/Fotolia_107797505_L.jpg')",
      backgroundSize: "500px 333px",
      backgroundRepeat: "no-repeat",
      backgroundPositionX: 0
    };

    return (
      <div className="fa-page">
        <div style={homePage}>
          <div style={homePageLeft}>
            <div>
              <h1>Welcome </h1>
              <span>
                Front end developer Munich based specialising in single page applications using the
                latest Javascript such as reactjs and extjs.
              </span>
            <p/>
              <b>Rich client applications in java swing or other java based UI frameworks such as JavaFX. </b>
                <p/>
                Architecture Consulting, REST Services, JEE,
                Data Modelling, OOA/D, Data Visualisation and Usability
            </div>
          </div>
          <div style={homePageRight}/>
        </div>
      </div>
    );
  }
}
