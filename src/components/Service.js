import React, { Component } from 'react';
import servicesData from './../data/services';
import ReactHtmlParser from 'react-html-parser';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBullseye, faBurn, faFireAlt, faSpa, faDumbbell, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faBullseye, faBurn, faFireAlt, faSpa, faDumbbell, faHeart)

class Service extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      services: servicesData,
    }
  }

  render() {

    return (

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

            

          </div>
        )
      }
    </div>
    


)
}

}


export default Service;