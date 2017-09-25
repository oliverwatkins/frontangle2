import React from "react";


export default class ServicesPage extends React.Component {
  render() {
    return (
      <div className="fa-page" >
        <h1>Services</h1>

        <h2>Services offered....</h2>

        <h3>Rich Client (aka Desktop).</h3>
        <ul>
          <li>
            Using the best patterns and practises in graphical user interface design, using Java Swing, Netbeans or JavaFX. Multithreaded hooked into live data, or just a standard application with the latest widgets.
          </li>
        </ul>

        <h3>Web Client Developement.</h3>
        <ul>
          <li>
            Developement of web applications using the latest and greatest javascript framework from jQuery to ExtJS and AngularJS. From design GUI Prototyping - Java and Javascript.
          </li>
          <li>
            Framework Consulting : Unsure of which of the 100s of javascript frameworks to choose for your web application? Let Front Angle help with the selection process.

          </li>
          <li>
            Software re-engineering and refactoring
          </li>
          <li>
            Refactoring is one of the cornerstones of the agile developement process. Rather than throw old software away, it can be refactored into something new.
          </li>
          <li>
            Analysis and Design, Team leading, Coaching and Software Architecture
          </li>
        </ul>
      </div>
    );
  }
}