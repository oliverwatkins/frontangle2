import React from "react";

import Swiper from "react-id-swiper"
import Slider from "react-slick"

import "./style.less"

import c1 from "./ichartsImages/grid4_yfill.png"
import c2 from "./ichartsImages/grid1.png"
import c3 from "./ichartsImages/grid2_graphpaper.png"

















export default class IcebergChartsPage extends React.Component {



  render() {

    let styleSlide = {};
    let styleSlideContainer = {};

    let maxWidth = "100%";
    let maxHeight = "100%";


    let w = "100px"
    let h = "600px"
    // let bwh = w + " " + h;

    let styleSize = {width:w, height:h};
    let styleMax = {maxHeight:maxHeight, maxWidth:maxWidth};
    let styleBorder = {border :'1px solid green'};
    let bgImageStyle = {backgroundSize: '80% 80%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'};



    styleSlide = Object.assign({}, styleSlide, styleSize);
    styleSlide = Object.assign({}, styleSlide, styleMax);
    styleSlide = Object.assign({}, styleSlide, styleBorder);
    styleSlide = Object.assign({}, styleSlide, bgImageStyle);

    styleSlideContainer = Object.assign({}, styleSlideContainer, styleSize);

    //
    //
    // let s1 = Object.assign({}, styleSlide, {backgroundImage:"url(" + c1 + ")"});
    // let s2 = Object.assign({}, styleSlide, {backgroundImage:"url(" + c2 + ")"});
    // let s3 = Object.assign({}, styleSlide, {backgroundImage:"url(" + c3 + ")"});


    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
        <Slider  {...settings} style={styleSlideContainer}>
          <div style={{ ...styleSlide, backgroundImage: `url(${c1})` }}></div>
          <div style={{ ...styleSlide, backgroundImage: `url(${c2})` }}></div>
        </Slider>
      </div>
    );
  }
}