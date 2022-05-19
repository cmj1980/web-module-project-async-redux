import React from 'react';

import { connect } from 'react-redux' // utility to "connect"
import * as actions from './actionCreators/actionCreators'

import './App.css';

function App() {
  return (
    <div className="App">
      Async Redux Project
    </div>
  );
}

export default connect(st => st, actions)(App);