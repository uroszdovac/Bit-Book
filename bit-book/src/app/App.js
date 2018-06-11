import React, { Component } from 'react';
import './App.css';
import './home/HomePage';
import Header from '../partials/header/Header';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
      </div>
    );
  }
}

export default App;
