import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListContainer from './components/listContainer/ListContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListContainer/>
      </div>
    );
  }
}

export default App;
