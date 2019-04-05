import React, { Component } from 'react';
import PageTitle from './PageTitle';

class NewClients extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pageTitle: "New Clients"
    }
  }

  render() {

    return (

      <section>
        <PageTitle pageTitle={this.state.pageTitle}></PageTitle>
        <div className="new-client">
                
        <div className="bg-light p-5">
          <div className="container">

            <div className="card mb-md-3 bg-light">
              <div className="row no-gutters">
                  <div className="card-body p-md-5">
                    <h2 class="card-text">Relax and enjoy a stress-free experience, every time.</h2>
                    <p>Here’s what else you can expect from your first session.</p>

                    <h5 class="card-text">1. MEET AND GREET</h5>

                    <p class="card-text">Once you arrive I will greet you and ask you to fill out a Wellness Chart and a quick survey. The Wellness Chart is where you record any medical history, past/present injuries and other physical conditions I should be made aware of. I will review the Wellness Chart with you, inquire about the reason(s) you are coming in for a massage, your current physical condition and any specific areas in which you are experiencing pain or would like to address during your massage.</p>

                    <h5 class="card-text">2.  STARTING YOUR MASSAGE SESSION</h5>

                    <p class="card-text">In the treatment room, you will find a comfortable massage table along with a chair for your personal belongings. I will leave the room and wait outside while you disrobe to your level of comfort. The massage etiquette varies for clients. Some clients prefer to completely disrobe, while some will remain partially clothed. Either option is fine. Once disrobed, you will lie on the massage table, under the top sheet. I will knock on the door to ask if you are ready before entering the room.</p>

                    <p class="card-text">You will always be draped with the top sheet during your massage session and an additional blanket is available at your request. I will only uncover the part of the body I am working on, ensuring that your modesty is respected at all times.</p>

                    <p class="card-text">You can expect a tranquil and comfortable environment during your massage. There will be relaxing music playing unless you request otherwise, and the room should be quiet, with no outside distractions.</p>

                    <h5 class="card-text">3. DURING YOUR MASSAGE</h5>

                    <p class="card-text">At any stage during the massage, you are invited to alert me if a technique or stroke that I am using is uncomfortable. Depending on your specific needs or requests, I will either perform a customized full-body massage (for general relaxation and stress reduction) or focus on the specific parts of your body that you have requested. This is your customized massage, and the best way for me to provide you with the best experience is to receive feedback. I invite you to do so at any time! I love hearing about the pressure, the room temperature, the lighting… let me know, I’m all ears!</p>

                    <h5 class="card-text">4. FOLLOW UP DISCUSSION</h5>

                    <p class="card-text">Once your massage therapy session is complete, I will leave the room so you may re-dress. Your massage will always finish 5 minutes prior to the end of the hour to allow time for dressing. I will knock prior to reentering the room with a glass of water for you to enjoy. At this point, I will discuss your future needs, schedule a follow-up appointment. It is important to continue to drink lots of water after a massage!</p>

                    <p class="card-text">I look forward to seeing you on your first visit. If you have any questions about the etiquette during a massage, please don’t hesitate to ask.</p>

                    <h5 class="card-text">5. CANCELLATION POLICY</h5>

                    <p class="card-text">Please arrive at least ten minutes before your scheduled appointment time in order to ensure a full massage session. Should you need to cancel for any reason, please consider the following:</p>

                    <ul>
                      <li>You may cancel your appointment without charge anytime before the close of business on the business day preceding your appointment.</li>
                      <li>Same day cancellations will be charged 50% of the scheduled service price.</li>
                      <li>If you do not call to cancel your appointment or do not show up for your scheduled appointment, you will be charged full price for the scheduled service.  </li>
                    </ul>
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


export default NewClients;