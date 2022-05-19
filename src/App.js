import React from 'react';

import { connect } from 'react-redux' // utility to "connect"
import * as actions from './actionCreators/actionCreators'

import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>All About Cats App</h1>
      <div>
      <span>{props.count}</span>
      <button onClick={evt => props.increment(5)}>inc</button>
      </div>
    </div>
  );
}

export default connect(st => st, actions)(App);