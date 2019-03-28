import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import MeetJenny from './components/MeetJenny';
import NewClients from './components/NewClients';
import Services from './components/Services';
import Bookings from './components/Bookings';
import Contact from './components/Contact';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="pt-3 pb-3 bg-light">

          <nav className="navbar navbar-expand-lg navbar-light">

                <a className="navbar-brand" href="/"> <img src={logo} alt="logo" className="w-100"/> </a> 

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <Link to='/' className="nav-link">Home</Link>
                  <Link to='/meet-jenny' className="nav-link">Meet Jenny</Link>
                  <Link to='/services' className="nav-link">Services</Link>
                  <Link to='/new-clients' className="nav-link">New Clients</Link>
                  <Link to='/bookings' className="nav-link">Bookings</Link>
                  <Link to='/contact' className="nav-link">Contact</Link>                
                </div>


                </nav>
        </header>
      

        <main className="mt-3">

          <Route exact path="/" component={Home} />
          <Route path="/meet-jenny" component={MeetJenny} />
          <Route path="/new-clients" component={NewClients} />
          <Route path="/services" component={Services} />
          <Route path="/bookings" component={Bookings} />
          <Route path="/contact" component={Contact} />

        </main>


      </div>
    );
  }
}

export default App;
