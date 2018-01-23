import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";


import PageLayout from "./PageLayout";
import HomePage from "./pages/HomePage";

import PreviousWorkPage from "./pages/PreviousWorkPage";
import BlogPage from "./pages/BlogPage";
import IcebergChartsPage from "./pages/IcebergChartsPage";
import ContactPage from "./pages/ContactPage";


const app = document.getElementById('app');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={PageLayout}>
      <IndexRoute component={HomePage}></IndexRoute>

      <Route path="previous" component={PreviousWorkPage}></Route>
      <Route path="blog" component={BlogPage}></Route>
      <Route path="icharts" component={IcebergChartsPage}></Route>
      <Route path="contact" component={ContactPage}></Route>
    </Route>
  </Router>,
  app);