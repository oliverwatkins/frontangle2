import React from "react";

import './style.less';

export default class HeaderPanel extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <div id="header">
        <div id="header-container">
          <div id="header-title">
            Iceberg Charts
          </div>
          <div id="header-image"/>

          {/*<div id="icharts-image" ></div>*/}
        </div>

        <div id="header-blurb">
          Free Java Charting Library and Framework
        </div>
        <hr/>
      </div>
    )
  }
}
{/*<div id="navcontainer" class="collapse navbar-collapse navbar-ex1-collapse">*/}
  {/*<ul>*/}
    {/*<li class="item" ng-click="click($event, 1)" ng-mouseenter="hoverIn($event)" ng-mouseleave="hoverOut($event)">*/}
      {/*<a href="#/home">Home</a>*/}
    {/*</li>*/}
    {/*<li class="item" ng-click="click($event, 4)" ng-mouseenter="hoverIn($event)" ng-mouseleave="hoverOut($event)">*/}
      {/*<a href="#/screenshots">Screenshots</a>*/}
    {/*</li>*/}
    {/*<li class="item" ng-click="click($event, 2)" ng-mouseenter="hoverIn($event)" ng-mouseleave="hoverOut($event)">*/}
      {/*<a href="#/codesamples">Code Samples</a>*/}
    {/*</li>*/}
  {/*</ul>*/}
{/*</div>*/}