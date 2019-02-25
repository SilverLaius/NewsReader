import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    const { error, loaded, articles } = this.props.addedProps;
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (!loaded) {
      return (
        <div className="container">
          <h2 className="loading">Loading...</h2>
        </div>
      );
    } else {
      return (
        <div className="container">
          {articles.map((child, idx) => {
            let liClasses = `content ${idx % 3 === 0 ? "big" : "small"}`;
            child["childID"] =
              child.title.replace(/ /g, "") +
              "PublishedAt" +
              child.publishedAt.replace(/:/g, "-");

            if (child["content"] != null) {
              child["content"] = child["content"].replace(
                new RegExp("\\[\\+\\d* chars\\]"),
                ""
              );
            }

            return (
              <div key={child.childID} className={liClasses}>
                <Link
                  to={{
                    pathname: `/article/${child.childID}`,
                    state: { article: child }
                  }}
                >
                  <img src={child.urlToImage} alt="Not available" />
                  <h1>{child.title}</h1>
                </Link>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default Home;
