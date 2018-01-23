import React from "react";

import './style.less';

export default class WelcomePage extends React.Component {
  render() {
    return (
      <div className="fa-page">
        <div id="home-page">
          <div id="home-page-left">
            <div>
              <h1>Welcome! </h1>
                Front end developer Munich based specialising in Single Page Applications using the
                  latest Javascript such as reactjs and extjs.
                  <p></p>
                Rich Client Applications in Swing or other java based UI
                  frameworks such as JavaFX.
                  <p></p>
                Architecture Consulting, REST Services, JEE,
                Data Modelling, OOA/D, Data Visualisation and Usability
            </div>
          </div>
          <div id="home-page-right">
          </div>
        </div>
      </div>
    );
  }
}
