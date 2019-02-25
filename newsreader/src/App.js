import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Article from "./components/article/Article";
import { fetchArticles } from "./actions/articleActions";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchArticles());
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route
              path="/"
              render={props => (
                <div>
                  <Navbar view="home" />
                  <Home {...props} addedProps={this.props} />
                </div>
              )}
              exact
            />
            <Route
              path="/article/:id"
              render={props => (
                <div>
                  <Navbar view="article" addedProps={this.props} />
                  <Article {...props} addedProps={this.props} />
                </div>
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles.items,
  loaded: state.articles.loaded,
  error: state.articles.error
});

export default connect(mapStateToProps)(App);
