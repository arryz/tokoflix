import React, { Component } from 'react';
import { /*BrowserRouter as Router, */Route, Link } from "react-router-dom";

import './App.css';
import MovieDetail from './../MovieDetail/MovieDetail';
import MoviesCurrent from './../MoviesCurrent/MoviesCurrents';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact={true} path="/" component={MoviesCurrent} />
        <Route path="/movie" component={MovieDetail} />
      </div>
    );
  }
}

export default App;
