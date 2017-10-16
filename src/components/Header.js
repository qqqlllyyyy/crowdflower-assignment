import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import FontAwesome from "react-fontawesome";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              <i className="material-icons">check_box</i>
              CF Tasks
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
