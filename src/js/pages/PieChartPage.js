import React from "react";

import {Component} from 'react';
import {Container} from 'flux/utils';

class PieChartPage extends Component {

  static calculateState(prevState) {
    return AppStore.getState();
  }

  handleChartNameChange(event) {
    var changeName = function(newName) {
      dispatcher.dispatch({
        type: "CHANGE_NAME",
        newName,
      });
    }

    console.info('changing text to ' + event.currentTarget.value)
    changeName(event.currentTarget.value);
  }

  render() {
    return (
      <div>
        <h1>Pie Chart</h1>

      </div>
    );
  }
}

export default PieChartPage;