import React, { Component } from 'react';
import Service from './Service';
import PageTitle from './PageTitle';
import CTA from './CTA';

class Services extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pageTitle: "Services"
    }
  }

  render() {

    return (
      <section className="services">

      <PageTitle pageTitle={this.state.pageTitle}></PageTitle>
      <Service></Service>
      <CTA></CTA>

      </section>
    )
  }

}


export default Services;