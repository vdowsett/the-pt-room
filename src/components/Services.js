import React, { Component } from 'react';

import PageTitle from './PageTitle';
import Service from './Service';


class Services extends Component {

  render() {

    return (
      <section className="services">

      <PageTitle></PageTitle>

      <div className="container text-center pt-5">
      <p className="subtitle m-0">Get back to your best you</p>
      <h2>I'm proud to offer the following services</h2>

      <Service></Service>

      </div>
      </section>
    )
  }

}


export default Services;