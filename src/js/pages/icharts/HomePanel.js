import React from "react";

import './style.less';

export default class HomePanel extends React.Component {
  render() {
    const {location} = this.props;

    // style = {
    //
    // }

    return (
      <div>
        <div style={{margin:"30px"}}>

          Iceberg Charts is an advanced charting library for creating charts in Java.
          <br/>
          It offers a rich set of charting features including :

          <ul>
            <li> XY Charts</li>
            <li> Pie Charts</li>
            <li> Area Charts</li>
            <li> Bubble Charts</li>
            <li> Candlestick Charts</li>
            <li> Bar Charts</li>
            <li> Stacked Charts</li>
          </ul>


          Check out some screenshots and then try out some of the code samples.
          <p/>

          Add it to your Maven project :

          <pre>
            <code>
            &lt;dependency&gt;
              &lt;groupId&gt;com.frontangle&lt;/groupId&gt;
              &lt;artifactId&gt;iceberg-charts&lt;/artifactId&gt;
              &lt;version&gt;1.1.1&lt;/version&gt;
            &lt;/dependency&gt;
            </code>
          </pre>

        </div>


        <div style={{float:"right"}}>

        </div>
      </div>
    )
  }
}
