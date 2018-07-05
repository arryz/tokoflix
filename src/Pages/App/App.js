import React, { Component } from 'react';
import { /*BrowserRouter as Router, */Route, Link } from "react-router-dom";

import './App.css';
import MovieDetail from './../MovieDetail/MovieDetail';
import MoviesCurrent from './../MoviesCurrent/MoviesCurrents';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact={true} path="/" component={MovieDetail} />
        <Route path="/movie" component={MoviesCurrent} />
      </div>
    );
  }
}

export default App;
