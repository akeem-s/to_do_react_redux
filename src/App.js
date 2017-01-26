import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListContainer from './components/listContainer/ListContainer'
import Header from './components/common/header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ListContainer/>
      </div>
    );
  }
}

export default App;
