import React, { Component } from "react";
import Error from "../error/Error";
import "./Article.css";

class Article extends Component {
  state = {};
  render() {
    let currentArticleID = this.props.match.params.id;
    if (!this.props.addedProps.loaded) {
      return (
        <div className="container">
          <h2 className="loading">Loading...</h2>
        </div>
      );
    } else {
      let article = this.props.addedProps.articles.find(
        a => a.articleID === currentArticleID
      );
      if (!article) {
        return <Error />;
      }
      return (
        <div className="article container">
          <h1 className="title">{article.title}</h1>
          <img src={article.urlToImage} alt="Not available" />
          <div className="articleContent">
            {article.content || "No content available. "}
          </div>
        </div>
      );
    }
  }
}

export default Article;
