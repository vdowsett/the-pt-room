import React from 'react';

const Footer = () => (
  <footer className="container">
    <div className="row">

        <div className="col-md-4">
            <h6>The PT Room</h6>
            <p className="small">I can't wait to connect with you soon! Reach out for exceptional massage therapy and personal training sessions designed to help you achieve the perfect mind-body harmony.</p>
        </div>

        <div className="col-md-4">
            <h6>Open Hours</h6>
            <p className="small">Flexible hours 7 days a week. Refer to <a href="/bookings">booking page</a> for available time slots.</p>
        </div>

        <div className="col-md-4">
            <h6>Contact Information</h6>
            <p className="small">14 A Centorian Drive<br/>
                Mairangi Bay, Auckland, 0632<br/>
                Email: theptroom@gmail.com<br/>
                Telephone: +64 27 446 8486</p>
        </div>

        <div className="col-12 mt-5">
            <p className="small text-center">The PT Room © 2019 All Rights Reserved</p>
        </div>

    </div>
  </footer>
);

export default Footer;