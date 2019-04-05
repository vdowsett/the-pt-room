import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import Service from './Service';
import CTA from './CTA';
import Prices from './Prices';
import PageTitle from './PageTitle';
import Reviews from './Reviews';

class Home extends Component {

  constructor(props) {
      super(props);

      this.state = { 
      pageTitle: "Home",
      }
  }

render() {

  return (

  <section>

    <PageTitle pageTitle={this.state.pageTitle}></PageTitle>
    
    <div className="cowbell hero jumbotron jumbotron-fluid">
      <div className="container">
        <div className="overlay p-5 shadow">
          <h5>Jenny Klooster: The Real Deal</h5>
          <h2 className=" text-uppercase">Certified Personal Trainer & Massage Therapist</h2>
          <h5>Accomplished Triathlete & IronMan Competitor</h5>
          <p className="lead">If you are looking for a healthier lifestyle I can help! Many of my clients come to me for treatments to improve menopause, speed recovery from injuries, improve chronic pain symptoms and help post-surgery.</p>
          <Link to="/bookings" className="mr-3">
            <button type="button" className="btn btn-info" target="_blank">Book Your Next Appointment</button> 
          </Link>
          <Link to="/meet-jenny" className="mr-3">
            <button type="button" className="btn btn-outline-dark" target="_blank">Meet Jenny</button>
          </Link>
          <a className="mr-3" href="https://www.facebook.com/pg/theptroom/reviews/?ref=page_internal" target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btn-outline-dark" target="_blank">Read My Reviews & Recommendations</button>
          </a>
        </div>
      </div>
    </div>

    <Service></Service>
    <CTA></CTA>
    <Prices></Prices>
    <Reviews></Reviews>

  </section>
);
  }}

export default Home;