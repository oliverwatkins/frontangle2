import React from "react";

import Slider from "react-slick"

import "./style.less"

import c1 from "./icharts/samples/TestDataArea_2_Multiple_Layered.PNG"
import c2 from "./icharts/samples/TestDataArea_4_Multiple_Stacked.PNG"
// import c3 from "./icharts/samples/grid2_graphpaper.png"
import c4 from "./icharts/samples/TestDataXY_Simple.PNG"
import c5 from "./icharts/samples/TestDataXY_Simple_Series.PNG"
import c6 from "./icharts/samples/TestDataBar_1_Simple.PNG"
import c7 from "./icharts/samples/TestDataBar_2Y.PNG"
import c8 from "./icharts/samples/TestDataBar_4_GradientColor.PNG"
import c9 from "./icharts/samples/TestDataBar_5_PosNegColor.PNG"
import c10 from "./icharts/samples/TestDataBar_FontFun.PNG"
import c11 from "./icharts/samples/TestDataBar_MultiBar_SideBySide.PNG"
import c12 from "./icharts/samples/TestDataBar_MultiBar_Stacked.PNG"

import c13 from "./icharts/samples/TestDataBubble_1_guns.PNG"

import c16 from "./icharts/samples/TestDataGrids_3_alternateGridFillX.PNG"
import c17 from "./icharts/samples/TestDataGrids_4_alternateGridFillY.PNG"
import c18 from "./icharts/samples/TestDataGrids_5_Gradiant.PNG"
import c19 from "./icharts/samples/TestDataPie_SimplePie.PNG"
import c20 from "./icharts/samples/TestDataPie_Multi.PNG"
import c21 from "./icharts/samples/TestDataPieBubble.PNG"
import c22 from "./icharts/samples/TestDataXY_Boxplot.PNG"
import c23 from "./icharts/samples/TestDataXY_CandlePlot.PNG"
import c24 from "./icharts/samples/TestDataXY_LineExamples.PNG"
import c25 from "./icharts/samples/TestDataXY_Math.PNG"
import c26 from "./icharts/samples/TestDataXY_Polynomals.PNG"
import c27 from "./icharts/samples/TestDataXY_SineCurve.PNG"
import c28 from "./icharts/samples/TestDataXY_Scatter.PNG"
import c29 from "./icharts/samples/TestStackedChart2.PNG"
import c30 from "./icharts/samples/TestStackedChart3.PNG"
import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/css/image-gallery.css";

export default class IcebergChartsPage2 extends React.Component {

  render() {
    const someInterestingImages = [
      {
        original: c1,
        thumbnail: c1,
      },
      {
        original: c2,
        thumbnail: c2,
      },
      {
        original: c4,
        thumbnail: c4,
      },
      {
        original: c5,
        thumbnail: c5,
      },
      {
        original: c6,
        thumbnail: c6,
      },
      {
        original: c7,
        thumbnail: c7,
      },
      {
        original: c8,
        thumbnail: c8,
      },
      {
        original: c9,
        thumbnail: c9,
      },
      {
        original: c10,
        thumbnail: c10,
      },
      {
        original: c11,
        thumbnail: c11,
      },
      {
        original: c12,
        thumbnail: c12,
      },
      {
        original: c13,
        thumbnail: c13,
      },
      {
        original: c17,
        thumbnail: c17
      },
      {
        original: c18,
        thumbnail: c18
      }
    ]


    return (
      <div className="blocky-thing">

        <h1>Iceberg Charts</h1>
        <p>
        Iceberg charts is a comprehensive java charting library.
        </p>
        <p>
          <a href="/#/icharts">
          Visit the project repository here.
          </a>
        </p>
        <p>
          Some chart examples can be seen here :
        </p>
        <ImageGallery id="ImageGallery" items={someInterestingImages} />
      </div>
    );
  }
}