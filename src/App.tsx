import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SummaryChart from "./compoonents/SummaryChart";
import { Major } from "./types/summary";
import SummaryInfo from "./compoonents/SummaryInfo";

class App extends Component {
  state = { major: Major.all, mode: "accumulated" };
  handleMajorChange = (e: any) => {
    this.setState({ major: e.target.value });
  };
  handleModeChange = (e: any) => {
    this.setState({ mode: e.target.value });
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexFlow: "column nowrap",
          margin: "3em"
        }}
      >
        <SummaryInfo />
        <form style={{marginTop: '2em'}}>
          <label>Major</label>
          <input
            type="radio"
            name="major"
            value={Major.all}
            checked={this.state.major === Major.all}
            onChange={this.handleMajorChange}
          />{" "}
          All
          <input
            type="radio"
            name="major"
            value={Major.content}
            checked={this.state.major === Major.content}
            onChange={this.handleMajorChange}
          />{" "}
          Content
          <input
            type="radio"
            name="major"
            value={Major.design}
            checked={this.state.major === Major.design}
            onChange={this.handleMajorChange}
          />{" "}
          Design
          <input
            type="radio"
            name="major"
            value={Major.marketing}
            checked={this.state.major === Major.marketing}
            onChange={this.handleMajorChange}
          />{" "}
          Marketing
          <input
            type="radio"
            name="major"
            value={Major.programming}
            checked={this.state.major === Major.programming}
            onChange={this.handleMajorChange}
          />{" "}
          Programming
        </form>
        <form>
          <label>Mode</label>
          <input
            type="radio"
            name="mode"
            value={"accumulated"}
            checked={this.state.mode === "accumulated"}
            onChange={this.handleModeChange}
          />{" "}
          Accumulated
          <input
            type="radio"
            name="mode"
            value={"seperated"}
            checked={this.state.mode === "seperated"}
            onChange={this.handleModeChange}
          />{" "}
          Seperated
        </form>
        <SummaryChart major={this.state.major} mode={this.state.mode} />
      </div>
    );
  }
}

export default App;
