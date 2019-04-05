import React, { Component } from 'react';
import CTA from './CTA';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faMapMarkerAlt)

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      pageTitle: "Contact Information",
    }
  }

  render() {
    return (
      <section>

        <div className="contact">

          <div className="winter text-light text-center">
            <div className="card-body p-md-5">
              <h2><FontAwesomeIcon icon={faMapMarkerAlt} /></h2>
              <h2 className="card-title">{this.state.pageTitle}</h2>
              <h5 className="card-text text-light">14 A Centorian Drive, Mairangi Bay, Auckland</h5>
              <h5 className="card-text text-light">theptroom@gmail.com</h5>
              <h5 className="card-text text-light">+64 27 446 8486</h5>
            </div>
          </div>

          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d399.634071915261!2d174.73652663612637!3d-36.744829011738204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d3a2c275fd8b9%3A0x2da6a700342d8353!2s14a+Centorian+Dr%2C+Windsor+Park%2C+Auckland+0632%2C+New+Zealand!5e0!3m2!1sen!2sus!4v1554479885051!5m2!1sen!2sus" className="w-100" height="400" frameborder="0" allowfullscreen></iframe>
          <CTA></CTA>
        </div>
      </section>
    )
  }
}

export default Contact;