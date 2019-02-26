import React, { Component } from "react";
import "./Error.css";

class Error extends Component {
  state = {};
  render() {
    return (
      <div className="errorMessage">
        <h1>Page does not exist</h1>
      </div>
    );
  }
}

export default Error;
