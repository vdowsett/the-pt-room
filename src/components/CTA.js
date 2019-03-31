import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faEnvelope)

class CTA extends Component {

  render() {

    return (
      <section className="cta hero jumbotron jumbotron-fluid m-0">
        <div className="container text-light text-center">
            <h2><FontAwesomeIcon icon="envelope" /></h2>


            <h2 className=" text-uppercase ">Take the next step to a healthier you...</h2>
            <br/>
            <button type="button" className="btn btn-outline-light btn-block" href="/bookings" target="_blank">Book Your Appointment Today</button>
        </div>
      </section>
    )
  }

}


export default CTA;