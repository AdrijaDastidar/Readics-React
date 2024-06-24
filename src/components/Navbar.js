import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <header>
          <h2 className="logo">{props.title}</h2>
          <nav className="navigation">
            <Link to="/Texto-React">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact Us</Link>
          </nav>
        </header>
      </div>
    );
  }
}
