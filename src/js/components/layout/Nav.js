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

    const homeClass = location.pathname === "/" ? "active" : "";

    const navClass = collapsed ? "collapse" : "";

    let previousClass = location.pathname.match(/^\/line/) ? "active" : "";
    let blogClass = location.pathname.match(/^\/pie/) ? "active" : "";
    let servicesClass = location.pathname.match(/^\/bar/) ? "active" : "";
    let ichartsClass = location.pathname.match(/^\/icharts/) ? "active" : "";
    let contactClass = location.pathname.match(/^\/contactClass/) ? "active" : "";


    // <Route path="services" component={ServicesPage}></Route>
    // <Route path="previous" component={PreviousWorkPage}></Route>
    //   <Route path="blog" component={BlogPage}></Route>
    //   <Route path="icharts" component={IcebergChartsPage}></Route>
    //   <Route path="contact" component={ContactPage}></Route>


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

                <li className={homeClass}>
                  <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
                </li>
                <li >
                  <Link to="services" onClick={this.toggleCollapse.bind(this)} className={servicesClass}>Services</Link>
                </li>
                <li>
                  <Link to="previous" onClick={this.toggleCollapse.bind(this)} className={previousClass}>
                    Previous Work
                  </Link>
                </li>
                <li >
                  <Link to="blog" onClick={this.toggleCollapse.bind(this)} className={blogClass}>
                    Blog
                  </Link>
                </li>
                <li >
                  <Link to="icharts" onClick={this.toggleCollapse.bind(this)} className={ichartsClass}>
                    Iceberg Chart
                  </Link>
                </li>
                <li >
                  <Link to="contact" onClick={this.toggleCollapse.bind(this)} className={contactClass}>
                    Contact
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
