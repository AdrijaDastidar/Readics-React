import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar title="Readico" />
        <div className="container">
          <News />
        </div>
      </>
    );
  }
}
