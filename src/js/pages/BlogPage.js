import React from "react";

import "./style.less"

export default class BlogPage extends React.Component {

  render() {


    return (
      <div className="fa-page blocky-thing"  >

        <div>

          <h1>Blog</h1>

          <p>

            <a href="http://www.blue-walrus.com">
            My blog </a> is where I write about javascript and javascript frameworks, java
            swing components, projects I am working on, problems i have encountered, and
            reviews.
          </p>
        </div>
        <div id="blog"></div>

      </div>
    );
  }
}