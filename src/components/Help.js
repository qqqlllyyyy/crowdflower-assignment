import React, { Component } from "react";

class Help extends Component {
  render() {
    return (
      <div className="container container-main">
        <h4>Help</h4>
        <h5>Libraries:</h5>
        <ol>
          <li>redux</li>
          <li>react-redux</li>
          <li>redux-thunk</li>
          <li>react-router-dom</li>
          <li>axios</li>
          <li>materialize-css</li>
          <li>react-dragula</li>
          <li>react-alert</li>
        </ol>
        <h5>How to run:</h5>
        <ol>
          <li>
            git clone https://github.com/qqqlllyyyy/crowdflower-assignment
          </li>
          <li>cd crowdflower-assignment</li>
          <li>npm install</li>
          <li>npm start</li>
        </ol>
      </div>
    );
  }
}

export default Help;
