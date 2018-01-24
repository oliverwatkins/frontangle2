import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";


import PageLayout from "./PageLayout";
import HomePage from "./pages/HomePage";

import PreviousWorkPage from "./pages/PreviousWorkPage";
import BlogPage from "./pages/BlogPage";
import IcebergChartsPage from "./pages/IcebergChartsPage";
import ContactPage from "./pages/ContactPage";
import PageLayoutICharts from "./pages/icharts/PageLayoutICharts";

import HomePanel from "./pages/icharts/HomePanel";
import ApiPanel from "./pages/icharts/ApiPanel";
import Screenshots from "./pages/icharts/Screenshots";
import CodesamplesPanel from "./pages/icharts/CodesamplesPanel";

const app = document.getElementById('app');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={PageLayout}>
      <IndexRoute component={HomePage}></IndexRoute>

      <Route path="previous" component={PreviousWorkPage}></Route>
      <Route path="blog" component={BlogPage}></Route>

      <Route path="contact" component={ContactPage}></Route>
    </Route>
    <Route path="icharts" component={PageLayoutICharts}>
      <IndexRoute path="/" component={HomePanel}></IndexRoute>
      <Route path="api" component={ApiPanel}></Route>
      <Route path="screenshots" component={Screenshots}></Route>
      <Route path="code" component={CodesamplesPanel}></Route>
    </Route>
  </Router>,
  app);