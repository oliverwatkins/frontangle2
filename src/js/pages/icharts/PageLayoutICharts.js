import React from "react";

import HeaderPanel from "./HeaderPanel";
import RightPanel from "./RightPanel";

import HomePanel from "./HomePanel";
import ApiPanel from "./HeaderPanel";
import CodesamplesPanel from "./CodesamplesPanel";
import Screenshots from "./Screenshots";

/**
 * Contains nav on top, footer on bottom, and all the pages are passed in
 * as children..
 */
export default class PageLayoutICharts extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "0px"
    };

    return (
      <div className="icharts">
        <HeaderPanel location={location} />
        <RightPanel location={location} />
        <div style={containerStyle}>
          <div>
            <div>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
