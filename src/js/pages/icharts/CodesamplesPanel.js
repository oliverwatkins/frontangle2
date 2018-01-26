import React from "react";

import './style.less';

import request from 'superagent';

import samplesFile from './samples/samples.json'

import index from './samples/index.html'


// import

export default class CodeSamplesPanel extends React.Component {


  componentWillMount() {
    function requireAll(r) {
      r.keys().forEach(r);
    }
    requireAll(require.context('./screenshots/', true));


    console.info(JSON.stringify(samplesFile))

    this.state = {};
    this.state.navHeader = samplesFile.samples;

    // request
    //   .get(samplesFile)
    //   .then(function(res) {
    //     alert(JSON.stringify(res))
    //   })
    //   .catch(function(err) {
    //     alert(err)
    //   });
    // function requireAll(r) { r.keys().forEach(r); }
    //
    //
    // requireAll(require.context('./modules/', true, /\.js$/));


  }


  blah() {

    request

    // import samplesFile from './samples/samples.json'
      .get('./js/pages/icharts/img/icbergcharts2.PNG')

      // .get('./src/js/pages/icharts/screenshots/img1.PNG')
      .then(function(res) {
        alert(JSON.stringify(res))
      })
      .catch(function(err) {
        alert(err)
      });

  }




  render() {

    let deleteS = this.blah;

    const { location } = this.props;

    let navHeadersArray = this.state.navHeader;

    return (
      <div id="tabs">
        <h1>THis is CodeSamples</h1>

        <img src='./#/icharts/screenshots/img1.PNG'/>

        <ul>
        {navHeadersArray.map(function(name, index){
          return <li key={index} onClick={e=>deleteS(e)}>{name.title}</li>;
        })}
        </ul>
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
