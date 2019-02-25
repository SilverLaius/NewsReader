import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <Link to="/">
          <i className="fas fa-arrow-left backButton" />
        </Link>

        <h3 className="navbarHeader">NEWS READER</h3>
        <i className="fas fa-external-link-alt external" />
      </div>
    );
  }
}

export default Navbar;
