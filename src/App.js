import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import MeetJenny from './components/MeetJenny';
import NewClients from './components/NewClients';
import Services from './components/Services';
import Bookings from './components/Bookings';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Service from './components/Service';

class App extends Component {
  render() {
    return (
      <HashRouter><Switch>
      <div className="App">
        <Header></Header>
        <main>
            <Route exact path="/" component={Home} />
            <Route path="/meet-jenny" component={MeetJenny} />
            <Route path="/new-clients" component={NewClients} />
            <Route path="/services" component={Services} />
            <Route path="/services/:slug" component={Service} />
            <Route path="/bookings" component={Bookings} />
            <Route path="/contact" component={Contact} />
        </main>
        <Footer></Footer>
      </div>
      </Switch></HashRouter>
    );
  }
}

export default App;
