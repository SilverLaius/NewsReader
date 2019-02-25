import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
class Navbar extends Component {
  state = {};
  render() {
    const view = this.props.view;
    if (view === "article") {
      return (
        <div className="navbar">
          <Link to="/">
            <i className="fas fa-arrow-left backButton" />
          </Link>

          <h3 className="navbarHeader">NEWS READER</h3>
          <Link to="/">
            <i className="fas fa-external-link-alt external" />
          </Link>
        </div>
      );
    } else if (view === "home")
      return (
        <div className="navbar">
          <h3 className="navbarHeader">NEWS READER</h3>
        </div>
      );
  }
}

export default Navbar;
