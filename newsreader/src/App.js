import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Article from "./components/article/Article";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/article/:id" component={Article} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
