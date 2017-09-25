import React from "react";

import IcebergChartsPage from "./IcebergChartsPage"
import BlogPage from "./BlogPage"
import ReactChartsPage from "./ReactChartsPage"

export default class PreviousWorkPage extends React.Component {
  render() {
    return (
      <div className="fa-page">
        I have worked for BMW, Lufthansa, Standard and Poors, eCommerce, financial trading houses and many
        more companies crossing over a diverse range of business areas.
        <div>
          <IcebergChartsPage/>
          <BlogPage/>
          <ReactChartsPage/>
        </div>
      </div>
    );
  }
}