import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faEnvelope)

class CTA extends Component {

  render() {

    return (
      <section className="bg-blue-light hero jumbotron jumbotron-fluid m-0">
        <div className="container text-light text-center">
            <h2><FontAwesomeIcon icon="envelope" /></h2>
            <h2 className=" text-uppercase ">Take the next step to a healthier you...</h2>
            <br/>
            <Link to="/bookings">
              <button type="button" className="btn btn-outline-light btn-block" target="_blank">Book Your Appointment Today</button>
            </Link>
        </div>
      </section>
    )
  }

}


export default CTA;