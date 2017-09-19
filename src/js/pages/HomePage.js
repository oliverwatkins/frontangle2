import React from "react";

import './style.less';

export default class WelcomePage extends React.Component {
  render() {
    return (
      <div style={{"display": "flex", "width": "100%"}}>
        <div style={{"flexGrow": 1}}>
          <h1>Welcome </h1>
          <ul>
            <li>Single Page Applications</li>
            <li>Rich Client Applications</li>
            <li>Clean Web Service / REST Interface</li>
            <li>Data Visualisations</li>
            <li>Usability</li>
            <li>Data Modelling</li>
          </ul>


        </div>
        <div id="notebook-image" style={{"flexGrow": 834}}>
        </div>
      </div>
    );
  }
}
