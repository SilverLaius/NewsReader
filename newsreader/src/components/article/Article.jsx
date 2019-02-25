import React, { Component } from "react";
import "./Article.css";

class Article extends Component {
  state = {};
  render() {
    let article = this.props.location.state.article;
    return (
      <div className="article">
        <h1>{article.title}</h1>
        <img src={article.urlToImage} alt="Not available" />
        <div className="articleContent">
          {article.content || "No content available. "}
          <a className="toSource" href={article.url}>
            Read more
          </a>
        </div>
      </div>
    );
  }
}

export default Article;
