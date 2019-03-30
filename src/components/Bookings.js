import React from 'react';


const Bookings = () => (

  <section className="bookings hero">


  <div className="container p-5 text-center text-light">

    <p className="subtitle m-0">I'm so excited!</p>
      
      <h2>READY - SET - GET TO BOOKING</h2>

      <p>Yes! I can't wait to work with you in getting to a healthier place in your life. Below you can choose from any of the services that I provide and book a time that is convenient for you.</p>
        
      <p>Scroll on down to book your appointment online!</p>
        
      <p>If you have any questions, please don't hesitate to contact me.</p>

      <div className="scheduler mt-5 mb-5">

        <iframe title="bookings" src="https://app.acuityscheduling.com/schedule.php?owner=13004853" width="100%" height="1700" frameBorder="0"></iframe><script src="https://d3gxy7nm8y4yjr.cloudfront.net/js/embed.js" type="text/javascript"></script>
      
      </div>
  </div>

    
  </section>
);

export default Bookings;