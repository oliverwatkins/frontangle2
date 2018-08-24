import React from "react";
// import {IndexLink, Link} from "react-router";

import {Link, withRouter} from "react-router-dom";

import Header from "./Header.js";

export class Nav extends React.Component {
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
                <Link to="/main" onClick={this.toggleCollapse.bind(this)}>Home</Link>
              </li>
              <li>
                <Link to="/main/previous" onClick={this.toggleCollapse.bind(this)} className={previousClassisActive}>
                  Previous Work
                </Link>
              </li>
              <li>
                <Link to="/icharts/" onClick={this.toggleCollapse.bind(this)} >
                  Iceberg Charts
                </Link>
              </li>
              <li >
                <Link to="/main/contact" onClick={this.toggleCollapse.bind(this)} className={contactClassisActive}>
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


//HOC gives Nav access to routing objects
export default withRouter(Nav)
