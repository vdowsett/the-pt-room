import React, { Component } from 'react';

class Reviews extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <section>

      <div className="reviews hero">


      <div className="container p-5 text-center">
          
          <h2>What my clients say...</h2>
          <blockquote class="blockquote">
            <p className="mb-0">"Best massage ever!! Have been going to Jenny for the last few years and she is amazing - missed her calling as a physio!! She gets into muscles I didn't know existed and I always feel so much better after a visit."</p>
            <p class="blockquote-footer">Lisa Meredith, <a href="https://www.facebook.com/pg/theptroom/reviews/?ref=page_internal" target="_blank" rel="noopener noreferrer"><cite title="Source Title">Facebook Reviews</cite></a></p>
          </blockquote>
          <a className="mr-3" href="https://www.facebook.com/pg/theptroom/reviews/?ref=page_internal" target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btn-outline-dark" target="_blank">More Reviews</button>
          </a>

      </div>

        
      </div>

      </section>
      
      

    )
  }
}

export default Reviews;