import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar title="Readico" onSearchSubmit={this.handleSearchSubmit} />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <News
                  heading="Top Headlines"
                  key="general"
                  category="general"
                />
              }
            />
            <Route
              path="/Top-Headlines"
              element={
                <News
                  heading="Top Headlines"
                  key="general"
                  category="general"
                />
              }
            />
            <Route
              path="/Business"
              element={
                <News
                  heading="Business News"
                  key="business"
                  category="business"
                />
              }
            />
            <Route
              path="/Entertainment"
              element={
                <News
                  heading="Entertainment News"
                  key="entertainment"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/International"
              element={
                <News
                  heading="International News"
                  key="international"
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              path="/Science"
              element={
                <News heading="Science News" key="science" category="science" />
              }
            />
            <Route
              path="/Sports"
              element={
                <News heading="Sports News" key="sports" category="sports" />
              }
            />
            <Route
              path="/Technology"
              element={
                <News
                  heading="Technology News"
                  key="technology"
                  category="technology"
                />
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}
