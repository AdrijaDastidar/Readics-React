import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <header>
          <h2 className="logo">{this.props.title}</h2>
          <nav className="navigation">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact Us</a>
          </nav>
        </header>
      </div>
    );
  }
}
