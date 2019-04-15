import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/Home';
import MeetJenny from './components/MeetJenny';
import NewClients from './components/NewClients';
import Services from './components/Services';
import Bookings from './components/Bookings';
import Contact from './components/Contact';
import Service from './components/Service';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router basename="spna.dowsettdesigns.com" >
        <div className="App">
          <Header></Header>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
                <Route path="/meet-jenny" component={MeetJenny} />
                <Route path="/new-clients" component={NewClients} />
                <Route path="/services" component={Services} />
                <Route path="/services/:slug" component={Service} />
                <Route path="/bookings" component={Bookings} />
                <Route path="/contact" component={Contact} />
            </Switch>
          </main>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
