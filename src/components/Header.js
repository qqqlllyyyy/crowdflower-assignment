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
            <a href="#" className="brand-logo">
              <i className="material-icons">check_box</i>
              CF Tasks
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="collapsible.html">JavaScript</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
