import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faGifts } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faGifts)

class Promotion extends Component {

  render() {

    return (
      <section className="bg-blue-light hero jumbotron jumbotron-fluid m-0">
        <div className="container text-light text-center">
            <h2><FontAwesomeIcon icon="gifts" /></h2>
            <h2 className="text-uppercase ">Give the gift of a wellness journey</h2>
            <p className="mt-3"><i>Gift Voucher for a 60 minute massage for $86.25. Appointments available 7 days a week.</i></p>
            <br/>
            <a href="https://app.acuityscheduling.com/catalog.php?owner=13004853&action=addCart&clear=1&id=201232">
              <button type="button" className="btn btn-light btn-block" target="_blank">Buy a Gift Voucher Here</button>
            </a>
            
        </div>
      </section>
    )
  }

}


export default Promotion;