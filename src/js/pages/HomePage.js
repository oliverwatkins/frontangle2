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
              <ul id="front-page-list">
                <li>Front end developer Munich based specialising in <b>Single Page Applications</b> using the
                  latest Javascript such as <b>reactjs</b> and <b>extjs</b>.
                  <p></p> </li>
                <li><b>Rich Client Applications</b> in <b>Swing</b> or other java based UI
                  frameworks such as JavaFX.
                  <p></p> </li>

                <li>Architecture Consulting, REST Services, JEE,
                Data Modelling, OOA/D, Data Visualisation and Usability</li>
              </ul>
            </div>
          </div>
          <div id="home-page-right">
          </div>
        </div>
      </div>
    );
  }
}
