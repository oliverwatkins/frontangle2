import React from "react";

import './style.less';
import {IndexLink, Link} from "react-router";

export default class HeaderPanel extends React.Component {

  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const {location} = this.props;
    const homeClassisActive = location.pathname === "/" ? "active" : "";
    let previousClassisActive = location.pathname.match(/^\/previous/) ? "active" : "";
    let contactClassisActive = location.pathname.match(/^\/contact/) ? "active" : "";
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

        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
            <ul className="nav navbar-nav">

              <li className={homeClassisActive}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
              </li>
              <li>
                <Link to="screenshots" onClick={this.toggleCollapse.bind(this)} className={previousClassisActive}>
                  Screenshots
                </Link>
              </li>

              <li>
                <Link to="codesamples" onClick={this.toggleCollapse.bind(this)} >
                  Code Samples
                </Link>
              </li>

              <li >
                <Link to="icharts/api" onClick={this.toggleCollapse.bind(this)} className={contactClassisActive}>
                  API
                </Link>
              </li>
            </ul>
          </div>
        </nav>


        {/*<div id="navcontainer" class="collapse navbar-collapse navbar-ex1-collapse">*/}
          {/*<ul>*/}
            {/*<li class="item" ng-click="click($event, 1)" ng-mouseenter="hoverIn($event)"*/}
                {/*ng-mouseleave="hoverOut($event)">*/}
              {/*<a href="#/home">Home</a>*/}
            {/*</li>*/}
            {/*<li class="item" ng-click="click($event, 4)" ng-mouseenter="hoverIn($event)"*/}
                {/*ng-mouseleave="hoverOut($event)">*/}
              {/*<a href="#/screenshots">Screenshots</a>*/}
            {/*</li>*/}
            {/*<li class="item" ng-click="click($event, 2)" ng-mouseenter="hoverIn($event)"*/}
                {/*ng-mouseleave="hoverOut($event)">*/}
              {/*<a href="#/codesamples">Code Samples</a>*/}
            {/*</li>*/}
          {/*</ul>*/}
        {/*</div>*/}



      </div>
    )
  }
}
