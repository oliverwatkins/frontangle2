import React from "react";

import Footer from "./layout/Footer";
import Nav from "./layout/Nav";

import {Switch, Route} from 'react-router-dom'

import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PreviousWorkPage from "./pages/PreviousWorkPage";


// import BouncySwitch from "./BouncySwitch"
import FadeSwitch from "./FadeSwitch"
import './style.less';
import { spring, AnimatedSwitch } from 'react-router-transition';


/**
 * Contains nav on top, footer on bottom, and all the pages are passed in
 * as children..
 *
 */
export default class PageLayout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "0px"
    };
    return (
      <div>
        <Nav location={location} />
        <div style={containerStyle}>
          <div>
            <div>
              <FadeSwitch>
                <Route exact path="/main" component = {HomePage}/>
                <Route path="/main/previous" component = {PreviousWorkPage}/>
                <Route path="/main/contact" component = {ContactPage}/>
              </FadeSwitch>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}
