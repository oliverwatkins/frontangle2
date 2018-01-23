import React from "react";

import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";

/**
 * Contains nav on top, footer on bottom, and all the pages are passed in
 * as children..
 */
export default class PageLayout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "0px"
    };

    if (location.pathname.match(/^\/icharts/)) {
      return (
        <div>
          <h1>THis is Icharts!!!!!!!!!!!!!!!!</h1>
        </div>
      )

    }else {
      return (
        <div>
          <Nav location={location} />

          <div style={containerStyle}>
            <div>
              <div>
                {this.props.children}
              </div>
            </div>
            <Footer/>
          </div>
        </div>
      );
    }
  }
}
