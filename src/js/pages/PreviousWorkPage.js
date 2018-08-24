import React from "react";

import IcebergChartsPage2 from "./IcebergChartsPage2"
import BlogPage from "./BlogPage"
import ReactChartsPage from "./ReactChartsPage"



export default class PreviousWorkPage extends React.Component {
  render() {
    return (
      <div className="fa-page" id="previous-page">
        <div>
          I have worked for BMW, Lufthansa, Standard and Poors, eCommerce, financial trading houses and many
          more companies crossing over a diverse range of business areas.
          <p/>
          In my spare time, these are some of the things I work on :
        </div>
        <div>
          <IcebergChartsPage2/>
          <BlogPage/>
          <ReactChartsPage/>
        </div>
      </div>
    );
  }
}