import React from "react";

import "./style.less"

export default class ReactChartsPage extends React.Component {

  render() {
    return (
      <div className="blocky-thing" >
        <div>
          <h4>React Charts</h4>
          <p>
            <a href="http://www.frontangle.com/reactCharts/#/">
              My React Charting application </a> is a continuous 'work in progress' charting
              application written entirely in ReactJS along with some third party components
          </p>
        </div>
        <div id="react-charts"></div>
      </div>
    );
  }
}