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

            return (
              <div key={child.articleID} className={liClasses}>
                <Link
                  className="toArticle"
                  to={{
                    pathname: `/article/${child.articleID}`
                  }}
                >
                  <img src={child.urlToImage} alt="Not available" />
                  <h1 className="title">{child.title}</h1>
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
