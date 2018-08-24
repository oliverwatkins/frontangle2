import React from "react";
import icebergImage from './img/icbergcharts2.PNG';
import headerImage from './img/icharts-banner.PNG';
import {Link, withRouter} from "react-router-dom";

import './HeaderPanel.less';


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
    const homeClassisActive = location.pathname === "/icharts" ? "active" : "";
    const screenshotsIsActive = location.pathname === "/icharts/screenshots" ? "active" : "";
    const codesamplesIsActive = location.pathname === "/icharts/codesamples" ? "active" : "";
    const apiIsActive = location.pathname === "/icharts/api" ? "active" : "";

    return (
      <div id="header">
        <div id="header-container">
            <img id="header-title-icharts" src={headerImage}/>
          <img src={icebergImage}/>
        </div>

        <div id="header-blurb">
          Free Java Charting Library and Framework, for use in Java2D, Swing or JavaFX applications.
        </div>
        <hr/>

        <nav className="navbar navbar-inverse" role="navigation">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li className={homeClassisActive}>
                <Link to="/icharts" onClick={this.toggleCollapse.bind(this)}>Home</Link>
              </li>
              <li className={screenshotsIsActive}>
                <Link to="/icharts/screenshots" onClick={this.toggleCollapse.bind(this)}>
                  Screenshots
                </Link>
              </li>
              <li className={codesamplesIsActive} >
                <Link to="/icharts/codesamples" onClick={this.toggleCollapse.bind(this)} >
                  Code Samples
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
