import React from "react";

import './style.less';

export default class RightPanel extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <section className ="container rightpanel" >
        <a href="https://github.com/oliverwatkins/Iceberg-Charts">
          <div id="right-panel"/>
          {/*<img src="resources/download_github.jpg"/>*/}
        </a>
      </section>
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