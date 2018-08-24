import React from "react";

import Footer from "./layout/Footer";
import Nav from "./layout/Nav";
import { Switch, Route, withRouter, Router, Redirect } from 'react-router-dom'

import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PreviousWorkPage from "./pages/PreviousWorkPage";

import PageLayoutMain from "./PageLayoutMain"

import PageLayoutICharts from "./pages/icharts/PageLayoutICharts"
import HomePanel from "./pages/icharts/HomePanel"
import ApiPanel from "./pages/icharts/ApiPanel"
import Screenshots from "./pages/icharts/Screenshots"
import CodesamplesPanel from "./pages/icharts/CodesamplesPanel"

// import BouncySwitch from "./BouncySwitch"
import FadeSwitch from "./FadeSwitch"

import './style.less';

/**
 *
 * Contains nav on top, footer on bottom, and all the pages are passed in
 * as children.
 */
class Main extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={()=>(<Redirect to="/main"/>)}/>
        <Route path="/main" component={PageLayoutMain}/>
        <Route path="/icharts" component={PageLayoutICharts}/>
      </div>
    );
  }
}
export default withRouter(Main)