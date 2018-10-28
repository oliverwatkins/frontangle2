import React from "react";
import {Link, withRouter} from "react-router-dom";
import Banner from "./Banner.js";
import Nav from "./Nav.js";
import "./header.less";


export class Header extends React.Component {
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



    const headerStyle = {
      position: "sticky",
      width:"100%",
      color: "pink",
      backgroundColor: "white",
      // left: 0,
      top: 0,
      // // position: "fixed",
      // transform: "translateZ(0)",
      zIndex: 99

    };

    return (
      <div style={headerStyle}>
        <Banner/>
        <Nav/>
      </div>
    );
  }
}

//HOC gives Nav access to routing objects
export default withRouter(Header)
