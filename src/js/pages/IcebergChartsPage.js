import React from "react";

import Swiper from "react-id-swiper"


import "./style.less"

import c1 from "./ichartsImages/grid4_yfill.png"
import c2 from "./ichartsImages/grid1.png"
import c3 from "./ichartsImages/grid2_graphpaper.png"


export default class IcebergChartsPage extends React.Component {
  render() {

    let w = "300px"
    let h = "300px"
    let bwh = "300px 300px"
    // alert("c1 " + c1)
    //
    //
    // let style = {
    //   backgroundImage: "url(" + c1 + ")",
    //   width:"300px",
    //   height:"200px"
    // }

    return (
      <div>
        Iceberg charts
        <Swiper className="swiper-container">

          <div className = "swiper-slide" style={{backgroundImage:"url(" + c1 + ")"}}></div>
          <div className = "swiper-slide" style={{backgroundImage:"url(" + c2 + ")"}}></div>
          <div className = "swiper-slide" style={{backgroundImage:"url(" + c2 + ")"}}></div>
          <div className = "swiper-slide" style={{backgroundImage:"url(" + c2 + ")"}}></div>

          <div style={{backgroundImage:"url(" + c2 + ")",  width:w, height:h, backgroundSize: {bwh}}}></div>
          <div style={{backgroundImage:"url(" + c3 + ")",  width:w, height:h, backgroundSize: {bwh}}}></div>

          <div style={{backgroundImage:"url(" + c1 + ")",  width:w, height:h, backgroundSize: {bwh}}}></div>
          <div style={{backgroundImage:"url(" + c2 + ")",  width:w, height:h, backgroundSize: {bwh}}}></div>
          <div style={{backgroundImage:"url(" + c3 + ")",  width:w, height:h, backgroundSize: {bwh}}}></div>

        </Swiper>
      </div>
    );
  }
}