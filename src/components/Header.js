import React from 'react';
import logo from '../logo.svg';
import { Route, Link } from 'react-router-dom';

const Header = () => (
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
);

export default Header;