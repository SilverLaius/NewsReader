import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
class Navbar extends Component {
  state = {};
  render() {
    if (this.props.addedProps.loaded) {
      let view = this.props.view;
      if (view === "article") {
        let currentArticleID = this.props.match.params.id;
        let article = this.props.addedProps.articles.find(
          a => a.articleID === currentArticleID
        );
        if (!article) {
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
        }
        return (
          <div className="navbar">
            <Link to="/">
              <i className="fas fa-arrow-left backButton" />
            </Link>

            <h3 className="navbarHeader">NEWS READER</h3>
            <a href={article.url}>
              <i className="fas fa-external-link-alt external" />
            </a>
          </div>
        );
      } else if (view === "home")
        return (
          <div className="navbar">
            <h3 className="navbarHeader">NEWS READER</h3>
          </div>
        );
    } else {
      return <div />;
    }
  }
}

export default Navbar;
