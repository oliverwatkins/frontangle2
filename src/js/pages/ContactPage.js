import React from "react";

export default class ContactPage extends React.Component {
  render() {
    return (
      <div className="fa-page contact-page">
        <div style={{"float": "left"}}>
          <div className="mugshot-image">
          </div>
        </div>
        <div style={{"width": "70%", "float" :"left"}}>
          <h1>Contact </h1>
          On social media :
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/oliver-watkins-0673b27/"> Linkedin </a>
            </li>
            <li>
              <a href="https://www.xing.com/profile/Oliver_Watkins2" > Xing </a>
            </li>
          </ul>
          <p/>
              Email : <b>oliver.f.watkins[at]gmail.com</b>
        </div>
      </div>
    );
  }
}