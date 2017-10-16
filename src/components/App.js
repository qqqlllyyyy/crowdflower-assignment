import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./Header";
import Dashboard from "./Dashboard";
import Help from "./Help";

class App extends Component {
  // componentDidMount() {
  //   this.props.fetchUser();
  // }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/help" component={Help} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
