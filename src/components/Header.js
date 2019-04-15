import React from 'react';
import logo from '../logo.svg';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import Home from './Home';
import MeetJenny from './MeetJenny';
import NewClients from './NewClients';
import Services from './Services';
import Bookings from './Bookings';
import Contact from './Contact';
import Service from './Service';

const Header = ({ match }) => (
  <header className="pt-3 pb-3 bg-light">
    <div className="container">
        
        <div className="row navbar navbar-expand-lg navbar-light ">
          <div className="col-lg-4">
            <a className="navbar-brand" href="/"> <img src={logo} alt="logo" className="w-100"/> </a> 
          </div>
          <div className="col-lg-8">
            <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <Link to='/' className="nav-link">Home</Link>
              <Link to="/meet-jenny" className="nav-link">Meet Jenny</Link>
              <Link to="/services" className="nav-link">Services</Link>
              <Link to="/new-clients" className="nav-link">New Clients</Link>
              <Link to="/bookings" className="nav-link">Bookings</Link>
              <Link to="/contact" className="nav-link">Contact</Link>                
            </div>
          </div>
        </div>
      </div>
  </header>
);

export default Header;