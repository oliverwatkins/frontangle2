import React from "react";

import Slider from "react-slick"

import "./style.less"

import c1 from "./ichartsImages/grid4_yfill.png"
import c2 from "./ichartsImages/grid1.png"
import c3 from "./ichartsImages/grid2_graphpaper.png"
import c4 from "./ichartsImages/TestDataXY_Simple.PNG"
import c5 from "./ichartsImages/TestDataXY_Simple_Series.PNG"
import c6 from "./ichartsImages/TestDataBar_1_Simple.PNG"
import c7 from "./ichartsImages/TestDataBar_2Y.PNG"
import c8 from "./ichartsImages/TestDataBar_4_GradientColor.PNG"
import c9 from "./ichartsImages/TestDataBar_5_PosNegColor.PNG"
import c10 from "./ichartsImages/TestDataBar_FontFun.PNG"
import c11 from "./ichartsImages/TestDataBar_MultiBar_SideBySide.PNG"
import c12 from "./ichartsImages/TestDataBar_MultiBar_Stacked.PNG"

import c13 from "./ichartsImages/TestDataBubble_1_guns.PNG"

import c14 from "./ichartsImages/TestDataGrids_1_gridSimple.PNG"
import c15 from "./ichartsImages/TestDataGrids_2_GraphPaper.PNG"
import c16 from "./ichartsImages/TestDataGrids_3_alternateGridFillX.PNG"
import c17 from "./ichartsImages/TestDataGrids_4_alternateGridFillY.PNG"
import c18 from "./ichartsImages/TestDataGrids_5_Gradiant.PNG"

import c19 from "./ichartsImages/TestDataPie_SimplePie.PNG"
import c20 from "./ichartsImages/TestDataPie_Multi.PNG"

import c21 from "./ichartsImages/TestDataPieBubble.PNG"

import c22 from "./ichartsImages/TestDataXY_Boxplot.PNG"
import c23 from "./ichartsImages/TestDataXY_CandlePlot.PNG"
import c24 from "./ichartsImages/TestDataXY_LineExamples.PNG"
import c25 from "./ichartsImages/TestDataXY_Math.PNG"
import c26 from "./ichartsImages/TestDataXY_Polynomals.PNG"
import c27 from "./ichartsImages/TestDataXY_SineCurve.PNG"

import c28 from "./ichartsImages/TestDataXY_Scatter.PNG"

import c29 from "./ichartsImages/TestStackedChart2.PNG"
import c30 from "./ichartsImages/TestStackedChart3.PNG"


export default class IcebergChartsPage extends React.Component {

  render() {

    let styleSlide = {};
    let styleSlideContainer = {};

    let maxWidth = "100%";
    let maxHeight = "100%";

    let w = "300px"
    let h = "400px"

    let styleSize = {width: w, height: h};
    let styleMax = {maxHeight: maxHeight, maxWidth: maxWidth};
    let styleBorder = {border: '1px solid green'};
    let bgImageStyle = {backgroundSize: '80% 80%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'};

    styleSlide = Object.assign({}, styleSlide, styleSize);
    styleSlide = Object.assign({}, styleSlide, styleMax);
    styleSlide = Object.assign({}, styleSlide, styleBorder);
    styleSlide = Object.assign({}, styleSlide, bgImageStyle);

    styleSlideContainer = Object.assign({}, styleSlideContainer, styleSize);

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:true,
      autoplay:true,
      autoplaySpeed:500,



    };

    return (
      <div>
        <button {...this.props}>Next</button>
        <Slider  {...settings} style={styleSlideContainer}>
          <div style={{ ...styleSlide, backgroundImage: `url(${c1})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c2})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c3})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c4})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c5})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c6})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c7})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c8})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c9})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c10})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c11})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c12})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c13})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c14})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c15})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c16})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c17})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c18})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c19})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c20})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c21})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c22})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c23})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c24})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c25})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c26})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c27})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c28})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c29})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c30})` }}></div>
        </Slider>
      </div>
    );
  }
}