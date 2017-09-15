import React from "react";

import {Container} from 'flux/utils';

import Actions from './../Actions.js';

class BarChartPage extends React.Component {


  handleChartNameChange(val, event) {
    // Actions.changeLineChartName(event.currentTarget.value);
    Actions.changeLineChartName(val);
  }


  static calculateState(prevState) {
    return AppStore.getState();
  }

  render() {

    let style = {
      // borderColor: "#808080",
      // borderStyle: "solid",
      // borderWidth: "1px"
    }

    return (
      <div>


      </div>
    );
  }
}


export default BarChartPage;