import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <header>
          <h2 className="logo">{this.props.title}</h2>
          <nav className="navigation">
            <a href="/">Top-Headlines</a>
            <a href="/">Business</a>
            <a href="/">Entertainment</a>
            <a href="/">International</a>
            <a href="/">Science</a>
            <a href="/">Sports</a>
            <a href="/">Technology</a>
          </nav>
        </header>
      </div>
    );
  }
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
