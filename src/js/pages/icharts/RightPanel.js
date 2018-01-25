import React from "react";

import './style.less';

import githubImage from './img/download_github.jpg';

export default class RightPanel extends React.Component {

// .rightpanel {
//   border: 1px solid black;
//   //background:white;
//   padding: 20px;
//   background: #90793f;
//   width: 200px;
//   height: 300px;
// }
//
//   #right-panel {
//   background-size: 100px 100px;
//   background-repeat: no-repeat;
//
//   //background: #8f9060;
//   //border-bottom: double #3a4a55 thick;
//   //size:100px 100px;
//   background-image: url("img/download_github.jpg");
//   //width:100px;
//   height: 100px;
//
// }


  render() {
    const styleSection = {
      margin:'0.5em',
      // border: '5px solid red',
      float:'right',
      height:'300px',
      width:'220px'
    }

    const { location } = this.props;

    return (
      <section className="container " style={styleSection}>
        <a href="https://github.com/oliverwatkins/Iceberg-Charts">
          <img src={githubImage}/>
        </a>
      </section>
    )
  }
}
{/*<div id="navcontainer" class="collapse navbar-collapse navbar-ex1-collapse">*/}
  {/*<ul>*/}
    {/*<li class="item" ng-click="click($event, 1)" ng-mouseenter="hoverIn($event)" ng-mouseleave="hoverOut($event)">*/}
      {/*<a href="#/home">Home</a>*/}
    {/*</li>*/}
    {/*<li class="item" ng-click="click($event, 4)" ng-mouseenter="hoverIn($event)" ng-mouseleave="hoverOut($event)">*/}
      {/*<a href="#/screenshots">Screenshots</a>*/}
    {/*</li>*/}
    {/*<li class="item" ng-click="click($event, 2)" ng-mouseenter="hoverIn($event)" ng-mouseleave="hoverOut($event)">*/}
      {/*<a href="#/codesamples">Code Samples</a>*/}
    {/*</li>*/}
  {/*</ul>*/}
{/*</div>*/}