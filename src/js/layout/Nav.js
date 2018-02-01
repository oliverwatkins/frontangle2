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

    const homeClassisActive = location.pathname === "/" ? "active" : "";

    const collapse = collapsed ? "collapse" : "";

    let previousClassisActive = location.pathname.match(/^\/previous/) ? "active" : "";
    let contactClassisActive = location.pathname.match(/^\/contact/) ? "active" : "";

    return (
      <div>
        <Header/>

        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
            <ul className="nav navbar-nav">

              <li className={homeClassisActive}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
              </li>
              <li>
                <Link to="previous" onClick={this.toggleCollapse.bind(this)} className={previousClassisActive}>
                  Previous Work
                </Link>
              </li>

              <li>
                <Link to="icharts" onClick={this.toggleCollapse.bind(this)} >
                  Icharts
                </Link>
              </li>

              <li >
                <Link to="contact" onClick={this.toggleCollapse.bind(this)} className={contactClassisActive}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}