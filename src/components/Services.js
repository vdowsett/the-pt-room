import React, { Component } from 'react';

import PageTitle from './PageTitle';
import servicesData from './../data/services';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBullseye, faBurn, faFireAlt, faSpa, faDumbbell, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ServiceModal from './ServiceModal';

library.add(faBullseye, faBurn, faFireAlt, faSpa, faDumbbell, faHeart)

class Services extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      services: servicesData,
    }
  }

  render() {
    return (
      <section className="services">

      <PageTitle></PageTitle>

      <div className="container text-center pt-5">
      <p className="subtitle m-0">Get back to your best you</p>
      <h2>I'm proud to offer the following services</h2>

      <div className="row p-5 mb05">
      { 
        this.state.services.map( (service, index) => 
          <div key={index} className="col-md-4">
            <div className="services-icon d-flex justify-content-center align-items-center">
              <FontAwesomeIcon className="p-1" icon={service.icon} />
            </div>
            <div className="mt-4 mb-4">
              {service.title}
            </div>
            <div className="mb-4">
            {ReactHtmlParser(service.intro)}
            </div>
            <ServiceModal key={index} service={servicesData[index]}></ServiceModal>
          </div>
        )
      }
    </div>
    </div>

      </section>
    )
  }

}


export default Services;