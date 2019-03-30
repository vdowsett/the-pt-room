import React, { Component } from 'react';
import servicesData from '../data/services';

class ServiceModal extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      services: servicesData,
    }
  }

  render() {

    return (
      <section>
        <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#exampleModal">
              Learn More
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{service.title}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                {ReactHtmlParser(service.details)}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

      </section>
    )
  }
}


export default ServiceModal;