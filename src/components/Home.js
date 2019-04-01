import React from 'react';
import { Link } from 'react-router-dom';
import Services from './Services'
import CTA from './CTA'
import Prices from './Prices'

const Home = () => (
  <section>
    
    <div className="home hero jumbotron jumbotron-fluid">
      <div className="container">
        <div className="overlay p-5 shadow">
          <h5>Jenny Klooser: The Real Deal</h5>
          <h2 className=" text-uppercase">Certified Personal Trainer & Massage Therapist</h2>
          <h5>Accomplished Triathlete & IronMan Competitor</h5>
          <p className="lead">If you are looking for healthier lifestyle I can help! Many of my clients come to me for treatments to improve menopause, speed recovery from injuries, improve chronic pain symptoms and help post surgery.</p>
          <Link to="/bookings" className="mr-3">
            <button type="button" className="btn btn-info" target="_blank">Book Your Next Appointment</button> 
          </Link>
          <Link to="/meet-jenny">
            <button type="button" className="btn btn-outline-dark" target="_blank">Meet Jenny</button>
          </Link>
        </div>
      </div>
    </div>

    <Services></Services>
    <CTA></CTA>
    <Prices></Prices>
    
  </section>
);

export default Home;