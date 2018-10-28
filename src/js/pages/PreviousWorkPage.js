import React from "react";

import IcebergChartsPage from "./IcebergChartsPage"
import BlogPage from "./BlogPage"
import ReactChartsPage from "./ReactChartsPage"



export default class PreviousWorkPage extends React.Component {
  render() {
    return (
      <div className="fa-page" id="previous-page">
        <div>
          I have worked across a diverse cross-section of companies. From financial trading houses, and ratings
          companies, during my time in London, to German household names such as BMW and Lufthansa,
          since I have been living in Munich. I have also worked on eCommerce projects, B2B projects and a number of
          smaller software companies.
          <p/>
          In my spare time, these are some of the projects I work on :
        </div>
        <div>
          <IcebergChartsPage/>
          <BlogPage/>
          <ReactChartsPage/>
        </div>
      </div>
    );
  }
}