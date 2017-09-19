import React from "react";

import "./style.less"

export default class BlogPage extends React.Component {

  render() {


    return (
      <div>

        <div>
          <p>
        Visit my blog. I write about projects I am working on, components I have created,
        problems encountered, technologies reviewed.
          </p>
        </div>
        <div id="blog"></div>

      </div>
    );
  }
}