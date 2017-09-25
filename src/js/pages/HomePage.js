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
                <li>Front end developer Munich based</li>
                <li>Single Page Applications</li>
                <li>ReactJS, ExtJS, and the latest Javascript developements</li>
                <li>Rich Client Applications</li>
                <li>Clean Web Service / REST Interface</li>
                <li>Data Visualisations</li>
                <li>Usability</li>
                <li>Data Modelling, OOA/D</li>
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
