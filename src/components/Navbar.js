import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    const navLinkStyle = {
      textDecoration: "none",
      color: "inherit",
    };

    return (
      <div>
        <header>
          <h2 className="logo">{this.props.title}</h2>
          <nav className="navigation navbar navbar-expand-lg">
            <button
              className="navbar-toggler btn btn-sm"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item"></li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/Top-Headlines"
                    style={navLinkStyle}
                  >
                    Top Headlines
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/Business"
                    style={navLinkStyle}
                  >
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/Entertainment"
                    style={navLinkStyle}
                  >
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/International"
                    style={navLinkStyle}
                  >
                    International
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Science" style={navLinkStyle}>
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Sports" style={navLinkStyle}>
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/Technology"
                    style={navLinkStyle}
                  >
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <style>
          {`
            .nav-link:hover {
              color: white !important;
            }
          `}
        </style>
      </div>
    );
  }
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
