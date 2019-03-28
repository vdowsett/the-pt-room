import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import MeetJenny from './components/MeetJenny';
import NewClients from './components/NewClients';
import Services from './components/Services';
import Bookings from './components/Bookings';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header></Header>

        <main>

          <Route exact path="/" component={Home} />
          <Route path="/meet-jenny" component={MeetJenny} />
          <Route path="/new-clients" component={NewClients} />
          <Route path="/services" component={Services} />
          <Route path="/bookings" component={Bookings} />
          <Route path="/contact" component={Contact} />

        </main>

        <Footer></Footer>


      </div>
    );
  }
}

export default App;
