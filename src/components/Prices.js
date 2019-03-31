import React, { Component } from 'react';
import pricesData from './../data/prices';

class Prices extends Component {

    constructor(props) {
        super(props);

        this.state = { 
        prices: pricesData,
        }
    }

  render() {

    return (
      <section className="prices hero m-0 text-light">

        <div className="container pt-5 pb-5">
            <h2>Pricing</h2>
            
            <blockquote class="blockquote">
                <i class="small mb-0">"Every accomplishment starts with a decision to try."</i>
            </blockquote>

            <div className="row"><div className="col-lg-8">
            
                <table className="table table-hover text-light">
                    <thead><tr>
                        <th scope="col">Service</th>
                        <th scope="col">Time</th>
                        <th scope="col">Price</th>
                    </tr></thead>
                    <tbody>

                    { 
                    this.state.prices.map( (price, index) =>
                        <tr key={index}>
                        <td> {price.title} </td> 
                        <td><i className="text-right">{price.time} </i> </td>
                        <td><i className="text-right">{price.price}</i> </td>
                        </tr>
                    )
                    }
                </tbody> </table>

                <button type="button" className="btn btn-light btn-block" href="/bookings" target="_blank">Book Your Appointment Today</button>

            </div></div>

        </div>
      </section>
    )
  }

}


export default Prices;