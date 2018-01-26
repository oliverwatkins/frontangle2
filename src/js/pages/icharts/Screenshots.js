import React from "react";


import './style.less';
import request from 'superagent';

import img1 from './screenshots/img1.PNG'
import img2 from './screenshots/img2.PNG'
import img3 from './screenshots/img3.PNG'
import img4 from './screenshots/img4.PNG'
import img5 from './screenshots/img5.PNG'
import img6 from './screenshots/img6.PNG'
import img7 from './screenshots/img7.PNG'
import img8 from './screenshots/img8.PNG'
import img9 from './screenshots/img9.PNG'
import img10 from './screenshots/img10.PNG'


// var fs = require('fs');
// var files = fs.readdirSync('/assets/photos/');


/**
 * Contains nav on top, footer on bottom, and all the pages are passed in
 * as children..
 */
export default class PageLayoutICharts extends React.Component {

  componentDidMount() {
    // request
    //   .get('http://localhost:8080/#/icharts/screenshots/screenshots')
    //   .then(function(res) {
    //
    //     // alert(JSON.stringify(res))
    //   })
    //   .catch(function(err) {
    //     // alert(err)
    //   });
  }




  render() {
    const {location} = this.props;
    const containerStyle = {
      marginTop: "0px"
    };



    // if (location.pathname.match(/^\/icharts/)) {
    return (
      <div>
        <img src={img1} className='screenshot-image'/>
        <img src={img2} className='screenshot-image'/>
        <img src={img3} className='screenshot-image'/>
        <img src={img4} className='screenshot-image'/>
        <img src={img5} className='screenshot-image'/>
        <img src={img6} className='screenshot-image'/>
        <img src={img7} className='screenshot-image'/>
        <img src={img8} className='screenshot-image'/>
        <img src={img9} className='screenshot-image'/>
        <img src={img10} className='screenshot-image'/>




      </div>

    )


    // else {
    //   return (
    //     <div>
    //       <Nav location={location} />
    //
    //       <div style={containerStyle}>
    //         <div>
    //           <div>
    //             {this.props.children}
    //           </div>
    //         </div>
    //         <Footer/>
    //       </div>
    //     </div>
    //   );
    // }


  }
}
