import React from "react";

import './style.less';

export default class WelcomePage extends React.Component {

  render() {
    const homePage = {
      display: "flex",
      width: "100%",
    };
    const homePageLeft = {
      display: "flex",
      width: "50%",
      flexGrow: 1,
      // margin:"30px",
      padding:"10px 30px 10px 30px"
    };
    const homePageRight = {
      width: "50%",
      height: "500px",
      flexGrow: 1,
      backgroundImage: "url('../../img/Fotolia_107797505_L.jpg')",
      backgroundSize: "500px 333px",
      backgroundRepeat: "no-repeat",
      backgroundPositionX: 0
    };

    return (
      <div className="fa-page">
        <div style={homePage}>
          <div style={homePageLeft}>
            <div>
              <h1>Welcome </h1>
              <span>
                Munich based developer with almost 20 years experience in Java and Javascript specialising in
              </span>
            <p/>
              <ul>
                <li>
                  Single page applications using the latest Javascript frameworks such as <b>reactjs</b>, <b>node </b> and <b>extjs</b>.
                </li>
                <li>
                  Backend developement in Java and the JEE ecosystem
                </li>
                <li>
                  Coaching, Business Analysis, Systems Engineering, and developement of Database Systems
                </li>
              </ul>
            <p/>
            </div>
          </div>
          <div style={homePageRight}/>
        </div>
      </div>
    );
  }
}
