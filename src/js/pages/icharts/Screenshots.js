import React from "react";


import './style.less';
/**
 * Contains nav on top, footer on bottom, and all the pages are passed in
 * as children..
 */
export default class PageLayoutICharts extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "0px"
    };

    // if (location.pathname.match(/^\/icharts/)) {
      return (
        <div>
          <h1>THis is Icharts!!!!!!!!!!!!!sad!!!</h1>
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
