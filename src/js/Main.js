import React from "react";

import Footer from "./layout/Footer";
import Nav from "./layout/Nav";
import { Switch, Route, withRouter } from 'react-router-dom'


import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import IcebergChartsPage from "./pages/IcebergChartsPage";
import PreviousWorkPage from "./pages/PreviousWorkPage";
import ReactChartsPage from "./pages/ReactChartsPage";
import ServicesPage from "./pages/ServicesPage";


import PageLayoutICharts from "./pages/icharts/PageLayoutICharts"
import HomePanel from "./pages/icharts/HomePanel"
import ApiPanel from "./pages/icharts/ApiPanel"
import Screenshots from "./pages/icharts/Screenshots"
import CodesamplesPanel from "./pages/icharts/CodesamplesPanel"







// import BouncySwitch from "./BouncySwitch"
import FadeSwitch from "./FadeSwitch"

import './style.less';
import { spring, AnimatedSwitch } from 'react-router-transition';

/**
 *
 * Contains nav on top, footer on bottom, and all the pages are passed in
 * as children.
 */
class Main extends React.Component {
  render() {
    const containerStyle = {
      marginTop: "60px",
    };

// we need to map the `scale` prop we define below
// to the transform style property
    function mapStyles(styles) {
      return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`,
      };
    }

// wrap the `spring` helper to use a bouncy config
    function bounce(val) {
      return spring(val, {
        stiffness: 330,
        damping: 22,
      });
    }

    // child matches will...
    const bounceTransition = {
      // start in a transparent, upscaled state
      atEnter: {
        opacity: 0,
        scale: 1.2,
      },
      // leave in a transparent, downscaled state
      atLeave: {
        opacity: bounce(0),
        scale: bounce(0.8),
      },
      // and rest at an opaque, normally-scaled state
      atActive: {
        opacity: bounce(1),
        scale: bounce(1),
      },
    };

    return (
      <div>


        <Route path="/icharts" component={PageLayoutICharts}>
          <Route exact path="/" component={HomePanel}/>
          <Route path="/api" component={ApiPanel}/>
          <Route path="/screenshots" component={Screenshots}/>
          <Route path="/codesamples" component={CodesamplesPanel}/>
        </Route>



        <Nav/>
        <div className="container" style={containerStyle}>
          <div className="row">
            <div className="col-lg-12">

              {/*<AnimatedSwitch*/}
              {/*atEnter={{ opacity: 0 }}*/}
              {/*atLeave={{ opacity: 0 }}*/}
              {/*atActive={{ opacity: 1 }}*/}
              {/*className="switch-wrapper"*/}
              {/*>*/}


              <FadeSwitch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/previous' component={PreviousWorkPage}/>
                {/*import IcebergChartsPage from "./pages/IcebergChartsPage";*/}
                {/*<Route path='/icharts' component={IcebergChartsPage}/>*/}






                {/*<Route path="/icharts" component={PageLayoutICharts}>*/}
                  {/*<Route exact path="/" component={HomePanel}/>*/}
                  {/*<Route path="/api" component={ApiPanel}/>*/}
                  {/*<Route path="/screenshots" component={Screenshots}/>*/}
                  {/*<Route path="/codesamples" component={CodesamplesPanel}/>*/}
                {/*</Route>*/}










                <Route path='/contact' component={ContactPage}/>
              </FadeSwitch>

              {/*</AnimatedSwitch>*/}
            </div>
          </div>
          <Footer/>




        </div>
      </div>
    );
  }
}

export default withRouter(Main)