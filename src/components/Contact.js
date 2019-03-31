import React from 'react';
import purple from '../assets/images/backgrounds/purple.jpg';
import white from '../assets/images/backgrounds/white-flower.jpg';

const Contact = () => (
  <section className="contact">
    
    <div className="bg-light p-5">
        
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


  </section>
);

export default Contact;