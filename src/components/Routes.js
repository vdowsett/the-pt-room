import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import MeetJenny from './MeetJenny';
import NewClients from './NewClients';
import Services from './Services';
import Bookings from './Bookings';
import Contact from './Contact';
import Service from './Service';

const Routes = () => (

    <section>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/meet-jenny" component={MeetJenny} />
            <Route path="/new-clients" component={NewClients} />
            <Route path="/services" component={Services} />
            <Route path="/services/:slug" component={Service} />
            <Route path="/bookings" component={Bookings} />
            <Route path="/contact" component={Contact} />
        </Switch>
    </section>

);

export default Routes;