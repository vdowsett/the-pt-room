import React, { Component } from 'react';

class PageTitle extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <section className="pagetitle  pt-5 pb-5 text-light">
        <div className="container">
          <h1>{this.props.pageTitle}</h1>
        </div>
      </section>
    )

  }
}

export default PageTitle;