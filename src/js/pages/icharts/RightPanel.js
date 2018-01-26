import React from "react";

import './style.less';

import githubImage from './img/download_github.jpg';

export default class RightPanel extends React.Component {


  render() {
    const styleGithubButton = {
      margin: 15

    }

    const styleSection = {
      margin:'0.5em',
      float:'right',
      height:'1000',
      width:'300px',
      background:'#ebebeb'
    }

    const { location } = this.props;

    return (
      <section className="container " style={styleSection}>
        <a href="https://github.com/oliverwatkins/Iceberg-Charts">
          <img style={styleGithubButton} src={githubImage}/>
        </a>
        <div>
          Add it to your maven project :
        </div>

        <pre>
          <span style={{fontSize:10, fontFamily: "courier new"}}>
            <code>
              &lt;dependency&gt; <br/>
              &nbsp; &lt;groupId&gt;com.frontangle&lt;/groupId&gt; <br/>
              &nbsp; &lt;artifactId&gt;iceberg-charts&lt;/artifactId&gt; <br/>
              &nbsp; &lt;version&gt;1.1.1&lt;/version&gt; <br/>
              &lt;/dependency&gt;
            </code>
          </span>
        </pre>

        And quickly get started with <a>these code samples</a>.

      </section>
    )
  }
}