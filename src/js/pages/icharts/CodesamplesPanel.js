import React from "react";

import './style.less';

import request from 'superagent';

// import html1 from './samples/TestDataXY_Simple.html'
// import img1 from './samples/TestDataXY_Simple.PNG'

import TestDataXY_Simple_HTML from './samples/TestDataXY_Simple.html'
import TestDataXY_Simple_PNG from './samples/TestDataXY_Simple.PNG'
import TestDataXY_Scatter_HTML from './samples/TestDataXY_Scatter.html'
import TestDataXY_Scatter_PNG from './samples/TestDataXY_Scatter.PNG'
import TestDataXY_Simple_Series_HTML from './samples/TestDataXY_Simple_Series.html'
import TestDataXY_Simple_Series_PNG from './samples/TestDataXY_Simple_Series.PNG'
import TestDataXY_LineExamples_HTML from './samples/TestDataXY_LineExamples.html'
import TestDataXY_LineExamples_PNG from './samples/TestDataXY_LineExamples.PNG'
import TestDataXY_CandlePlot_HTML from './samples/TestDataXY_CandlePlot.html'
import TestDataXY_CandlePlot_PNG from './samples/TestDataXY_CandlePlot.PNG'
import TestDataXY_Boxplot_HTML from './samples/TestDataXY_Boxplot.html'
import TestDataXY_Boxplot_PNG from './samples/TestDataXY_Boxplot.PNG'
import TestDataBar_FontFun_HTML from './samples/TestDataBar_FontFun.html'
import TestDataBar_FontFun_PNG from './samples/TestDataBar_FontFun.PNG'
import TestDataGrids_3_alternateGridFillX_HTML from './samples/TestDataGrids_3_alternateGridFillX.html'
import TestDataGrids_3_alternateGridFillX_PNG from './samples/TestDataGrids_3_alternateGridFillX.PNG'
import TestDataGrids_4_alternateGridFillY_HTML from './samples/TestDataGrids_4_alternateGridFillY.html'
import TestDataGrids_4_alternateGridFillY_PNG from './samples/TestDataGrids_4_alternateGridFillY.PNG'
import TestDataGrids_5_Gradiant_HTML from './samples/TestDataGrids_5_Gradiant.html'
import TestDataGrids_5_Gradiant_PNG from './samples/TestDataGrids_5_Gradiant.PNG'
import TestDataBar_1_Simple_HTML from './samples/TestDataBar_1_Simple.html'
import TestDataBar_1_Simple_PNG from './samples/TestDataBar_1_Simple.PNG'
import TestDataBar_4_GradientColor_HTML from './samples/TestDataBar_4_GradientColor.html'
import TestDataBar_4_GradientColor_PNG from './samples/TestDataBar_4_GradientColor.PNG'
import TestDataBar_5_PosNegColor_HTML from './samples/TestDataBar_5_PosNegColor.html'
import TestDataBar_5_PosNegColor_PNG from './samples/TestDataBar_5_PosNegColor.PNG'
import TestDataBar_6_Transparancy_HTML from './samples/TestDataBar_6_Transparancy.html'
import TestDataBar_6_Transparancy_PNG from './samples/TestDataBar_6_Transparancy.PNG'
import TestDataLog_1_HTML from './samples/TestDataLog_1.html'
import TestDataLog_1_PNG from './samples/TestDataLog_1.PNG'
import TestDataPieBubble_HTML from './samples/TestDataPieBubble.html'
import TestDataPieBubble_PNG from './samples/TestDataPieBubble.PNG'
import TestDataXY_Math_HTML from './samples/TestDataXY_Math.html'
import TestDataXY_Math_PNG from './samples/TestDataXY_Math.PNG'
import TestDataXY_SineCurve_HTML from './samples/TestDataXY_SineCurve.html'
import TestDataXY_SineCurve_PNG from './samples/TestDataXY_SineCurve.PNG'
import TestDataXY_Polynomals_HTML from './samples/TestDataXY_Polynomals.html'
import TestDataXY_Polynomals_PNG from './samples/TestDataXY_Polynomals.PNG'
import TestStackedChart2_HTML from './samples/TestStackedChart2.html'
import TestStackedChart2_PNG from './samples/TestStackedChart2.PNG'
import TestStackedChart3_HTML from './samples/TestStackedChart3.html'
import TestStackedChart3_PNG from './samples/TestStackedChart3.PNG'
import TestDataBar_MultiBar_SideBySide_HTML from './samples/TestDataBar_MultiBar_SideBySide.html'
import TestDataBar_MultiBar_SideBySide_PNG from './samples/TestDataBar_MultiBar_SideBySide.PNG'
import TestDataBar_MultiBar_Stacked_HTML from './samples/TestDataBar_MultiBar_Stacked.html'
import TestDataBar_MultiBar_Stacked_PNG from './samples/TestDataBar_MultiBar_Stacked.PNG'
import TestDataBubble_1_guns_HTML from './samples/TestDataBubble_1_guns.html'
import TestDataBubble_1_guns_PNG from './samples/TestDataBubble_1_guns.PNG'
import TestDataBubble_2_series_HTML from './samples/TestDataBubble_2_series.html'
import TestDataBubble_2_series_PNG from './samples/TestDataBubble_2_series.PNG'
import TestDataPie_SimplePie_HTML from './samples/TestDataPie_SimplePie.html'
import TestDataPie_SimplePie_PNG from './samples/TestDataPie_SimplePie.PNG'
import TestDataPie_Multi_HTML from './samples/TestDataPie_Multi.html'
import TestDataPie_Multi_PNG from './samples/TestDataPie_Multi.PNG'
import TestDataBar_2Y_HTML from './samples/TestDataBar_2Y.html'
import TestDataBar_2Y_PNG from './samples/TestDataBar_2Y.PNG'






import samplesFile from './samples/samples.json'

// import TestDataBar_4_GradientColor from './samples/TestDataBar_4_GradientColor.PNG'
// import TestDataBar_2Y_PNG from './samples/TestDataBar_2Y.PNG'
// import TestDataBar_2Y from './samples/TestDataBar_2Y.txt'

// import TestDataBar_4_GradientColor from './samples/TestDataBar_4_GradientColor.PNG'


// import

export default class CodeSamplesPanel extends React.Component {


  componentWillMount() {
    function requireAll(r) {
      r.keys().forEach(r);
    }
    requireAll(require.context('./samples/', true));



    // this.blah = bind()

    this.state = {};
    this.state.navHeader = samplesFile.samples;


    this.blah = this.blah.bind(this);

    // function requireAll(r) { r.keys().forEach(r); }
    //
    //
    // requireAll(require.context('./modules/', true, /\.js$/));


  }


  blah(fileName) {


    let arr = samplesFile["samples"];

    let elem = arr.find((elem)=> {
      return elem.fileName == fileName;

    })
    // alert(JSON.stringify(elem.url))
    this.state.urlToLoad = elem.url;


    let self = this;
    // http://localhost:8080/js/pages/icharts/samples/TestDataXY_Simple.html
    // elem.url = "js/pages/icharts/samples/TestDataXY_Simple.html"
    request
      .get(elem.url)
      .then(function(res) {
        // alert(JSON.stringify(res.text))

        self.setState({htmlToLoad: res.text}); // = res.text;
      })
      .catch(function(err) {
        alert(err)
      });

    // samplesFile

    // request
    //
    // // import samplesFile from './samples/samples.json'
    //   .get('./js/pages/icharts/img/icbergcharts2.PNG')
    //
    //   // .get('./src/js/pages/icharts/screenshots/img1.PNG')
    //   .then(function(res) {
    //     alert(JSON.stringify(res))
    //   })
    //   .catch(function(err) {
    //     alert(err)
    //   });

  }




  render() {

    let selectImg = this.blah;

    const { location } = this.props;

    let navHeadersArray = this.state.navHeader;
    let urlToLoad = this.state.urlToLoad

    // let imgToDiesplay = <img src={img1}  className='screenshot-image'/>
    // let htmlToDisplay = TestDataXY_Simple_HTML;

    // let htmlDoc = {__html: TestDataXY_Scatter_HTML};
    let htmlToLoad = this.state.htmlToLoad;

    return (
      <div id="tabs">
        <h1>Code Samples</h1>
        <h3>Quickly get started with these samples</h3>
        <ul>
        {navHeadersArray.map(function(name, index){
          return <li key={index} onClick={e=>selectImg(name.fileName)}>{name.title}</li>;
        })}
        </ul>

        {/*{imgToDiesplay}*/}
        <div dangerouslySetInnerHTML={{__html:htmlToLoad}} ></div>

      </div>
    )

    // var mainInfo = null;
    // $http.get('partials/samples.json').success(function(data) {
    //   mainInfo = data;
    //   $scope.tabs = data.samples;
    //   // alert('mainInfo : ' + mainInfo)
    // });
  }
}
