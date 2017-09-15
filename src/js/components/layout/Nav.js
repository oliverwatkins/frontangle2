import React from "react";
import {IndexLink, Link} from "react-router";

import Header from "./Header.js";


import './style.less';

export default class Nav extends React.Component {
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
    const {collapsed} = this.state;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    let lineClass = location.pathname.match(/^\/line/) ? "active" : "";
    let pieClass = location.pathname.match(/^\/pie/) ? "active" : "";
    let barClass = location.pathname.match(/^\/bar/) ? "active" : "";

    barClass = barClass + " bar-chart"
    lineClass = lineClass + " line-chart"
    pieClass = pieClass + " pie-chart"


    return (



      <div>

        <Header/>

        <nav className="navbar navbar-inverse navbar-fixed" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className={featuredClass}>
                  <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>HomeX</IndexLink>
                </li>
                <li >

                  <Link to="bar" onClick={this.toggleCollapse.bind(this)} className={barClass}>
                    asdf
                  </Link>

                </li>
                <li>
                  <Link to="line" onClick={this.toggleCollapse.bind(this)} className={lineClass}>
                    fasd
                  </Link>
                </li>
                <li >
                  <Link to="pie" onClick={this.toggleCollapse.bind(this)} className={pieClass}>

                    fdas

                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
