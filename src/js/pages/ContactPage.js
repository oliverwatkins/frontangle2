import React from "react";
export default class ContactPage extends React.Component {
  render() {
    return (

      <div className="fa-page">
        <div style={{"width": "70%", "float" :"left"}}>
          <h1>Contact </h1>
          Contact me via
           <a href="https://www.linkedin.com/in/oliver-watkins-0673b27/"> linkedin </a> ,

          <a href="https://www.xing.com/profile/Oliver_Watkins2" > Xing </a>
          or write me an email at : oliver.f.watkins[at]gmail.com

        </div>
        <div style={{"float": "left"}}>
          <div className="mugshot-image">
          </div>
        </div>
      </div>


    );
  }
}