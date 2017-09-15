import React from "react";



import {Container} from 'flux/utils';

import Actions from './../Actions.js';


class LineChartPage extends React.Component {


  handleChartNameChange(event) {
    Actions.changeLineChartName(event.currentTarget.value);
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

        line...

      </div>
    );
  }
}

export default LineChartPage;