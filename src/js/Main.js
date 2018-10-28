import React from "react";

import { Switch, Route, withRouter, Router, Redirect } from 'react-router-dom'

import PageLayoutMain from "./PageLayoutMain"

import PageLayoutICharts from "./pages/icharts/PageLayoutICharts"



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