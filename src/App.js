import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Routes from './components/Routes';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <Routes></Routes>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
