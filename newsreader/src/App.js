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
    const { error, loaded, articles } = this.props;
    console.log({ error, loaded, articles });
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route
              path="/"
              render={props => <Home {...props} addedProps={this.props} />}
              exact
            />
            <Route path="/article/:id" component={Article} />
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
