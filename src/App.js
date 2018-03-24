import './App.css';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './configure-store';
import Todos from './todo/main.js';

class App extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <Todos />
      </Provider>
    );
  }
}

export default App;
