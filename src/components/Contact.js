import React, { Component } from 'react';
import PageTitle from './PageTitle';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      pageTitle: "Contact",
    }
  }

  render() {
    return (
      <section>
         <PageTitle pageTitle={this.state.pageTitle}></PageTitle>

        <div className="contact">
    
          <div className="bg-light p-5">
            <div className="container">
              
              <div className="card mb-md-3 bg-light">
                <div className="row">
                    <div className="col-md-6">
                      <div className="card-body p-md-5">
                        <h5 class="card-title">CONTACT INFORMATION</h5>
                          <p class="card-text">
                            <b>ADDRESS:</b> 14 A Centorian Drive, Mairangi Bay, Auckland<br/>
                            <b>EMAIL:</b> theptroom@gmail.com<br/>
                            <b>PHONE:</b> +64 27 446 8486</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card-body p-md-5">
                        <h5 class="card-title">LOOKING TO MAKE A BOOKING? GREAT! </h5>
                        <p class="card-text">Visit the <a href="/bookings">bookings page</a> to book your next appointment online</p>
                        <p class="card-text"><b>BUSINESS HOURS: </b>Appointments available 7 days a week.</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact;