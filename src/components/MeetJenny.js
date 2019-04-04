import React, { Component } from 'react';
import PageTitle from './PageTitle';
import Reviews from './Reviews';
import profilePhoto from '../assets/images/meet-jenny/jenny-strecker-personal-trainer.jpg';
import ironManPhoto from '../assets/images/meet-jenny/Ironman-Auckland-2014-Jenny.png';
import swimPhoto from '../assets/images/meet-jenny/Jenny-Beach-Series.png';
import bikePhoto from '../assets/images/meet-jenny/Jenny-70.3-2014.jpg';
import maxLogo from '../assets/images/qualifications/MAX-Logo1.png';
import repLogo from '../assets/images/qualifications/REPstrainer3.jpg';

class MeetJenny extends Component {

  constructor(props) {
    super(props);

    this.state = { 
    pageTitle: "Meet Jenny",
    }
  }

  render() {

    return (
      <section>

        <PageTitle pageTitle={this.state.pageTitle}></PageTitle>

        <div className="meet-jenny">

        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col-md-4">
              <img className="img-fluid rounded" src={profilePhoto} alt="Meet Jenny"/>
              <img className="w-50 p-4 img-fluid rounded" src={repLogo} alt="Meet Jenny"/>
              <img className="w-50 p-4 img-fluid rounded" src={maxLogo} alt="Meet Jenny"/>
            </div>
            <div className="col-md-8">
              <h2>Hi, it's a pleasure to meet you!</h2>
              <p>I’m Jenny Klooster, owner and operator of The PT Room. I am a highly motivated triathlete, caring mother of two and energetic grandmother of three! Coffee drinker. Triathlete. Multi-IronMan finisher.</p>
              <p>I have worked with clients as a Massage Therapist and Personal Trainer since 2007, helping each to achieve, succeed and excel.</p>
              <p>I started my North Shore based business in 2007 with the goal of helping clients lead healthier, happier and more comfortable lives. I am uniquely qualified as both a Certified Personal Training and a Certified Massage Therapist.</p>
              <p>I am motivated by seeing my clients reach healthier lifestyles. Many of my clients are experiencing menopause, recovering from injuries, suffering from chronic pain and post surgery patients.</p>
              <p>Having completed a Diploma in Massage Therapy, as well as certifications in Neuromuscular Therapy, Sports Massage and Reflexology, I commenced my career in the health industry working as a massage therapist in various spas. Before establishing The PT Room, I managed a Therapeutic Massage company at Auckland International Airport. More recently I worked alongside physiotherapist Mark Grimstone, at Mt. Roskill Physiotherapy and Sports Clinic, focusing on treating clients with chronic pain and muscle discomfort resulting from injuries.</p>
              <p>To further my qualifications and personal goals in the health and fitness industry, I completed Certificates in Personal Training, including becoming a Certified Menofitness Trainer.  I am proud to be a REPs Registered Personal Trainer.</p>
              
            </div>
          </div>
        </div>

        <div className="bg-light p-5">
          <div className="container">

          <div className="card mb-md-3 bg-light">
            <div className="row no-gutters">
              <div className="col-md-8">
                <div className="card-body p-md-5">
                  <h2 className="card-title">THE REAL DEAL...</h2>
                  <p className="card-text">My passion and personal goals have led me to compete, and complete, multiple Iron Man events (full and half), as well as the several running, cycling and swimming events. I love the triathlon experience, and continue to train and compete in triathlons, swimming, running and cycling races both in New Zealand and across the world.</p>
                  <p className="card-text">In addition, it has been my pride and joy to watch some of my clients, some with no previous experience, achieve personal success in competing in triathlon, 5K, biking or swimming events themselves. Getting to share this journey with each of them has been rewarding, and continues inspire me to continue training each day.</p>
                  <p className="card-text">To learn more about my IronMan journey, I invite you to read this article in the New Zealand Herald.</p>
                  <a href="http://www.nzherald.co.nz/lifestyle/news/article.cfm?c_id=6&objectid=11409956" target="_blank" rel="noopener noreferrer">
                    <button type="button" className="btn btn-info">New Zealand Herald Article</button>
                  </a>
                </div>
              </div>

              <div className="col-md-4">
                <img src={bikePhoto} className="card-img" alt="..." />
              </div>
              
            </div>
          </div>
          
          </div>
        </div>
        
        <Reviews></Reviews>
        

        <div className="small bg-light"><div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-12"><h2 className="mb-4">Achievements</h2></div>

            <div className="col-md-6">

              <div className="card">
                <img src={ironManPhoto} className="card-img-top" alt="Jenny running IronMan Auckland"/>
                <div className="card-body">
                  <h5 className="card-title">IronMan & Triathlons</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Challenge Roth (IronMan), Germany: 2017</li>
                  <li className="list-group-item">IronMan Western Australia: 2016</li>
                  <li className="list-group-item">IronMan South Africa: 2016</li>
                  <li className="list-group-item">Tauranga Tinman: 2016</li>
                  <li className="list-group-item">Recipient of 2015 Kellogg’s Nutri-Grain Unstoppable Champion Sponsorship during 2015 Kellogg’s Nutri-Grain Ironman in Taupo</li>
                  <li className="list-group-item">Ironman 70.3 Auckland: 2015, 2014, 2013</li>
                  <li className="list-group-item">IronMan 70.3 Taupo: 2015</li>
                  <li className="list-group-item">IronMan 70.3 Port Macquirie: 2015</li>
                  <li className="list-group-item">IronMan New Zealand: 2015</li>
                  <li className="list-group-item">Ironman 70.3 Western Sydney: 2014</li>
                  <li className="list-group-item">Contact Tri Women April</li>
                  <li className="list-group-item">Barefoot and Thompson Tri Oct</li>
                </ul>
              </div>
            
            </div>
            
            <div className="col-md-6">

              <div className="card">
                <img src={swimPhoto} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Swimming, Running & Cycling </h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Northburn 100 miler: 2018</li>
                  <li className="list-group-item">Tussock Traverse: 2017</li>
                  <li className="list-group-item">Tarawera Ultra 102km: 2017</li>
                  <li className="list-group-item">Tauranga Tinman: 2016</li>
                  <li className="list-group-item">Coastal Challenge: 2017, 2016</li>
                  <li className="list-group-item">Tarawera 50km: 2017</li>
                  <li className="list-group-item">Waitetuna Wind Farm Trail: 2017</li>
                  <li className="list-group-item">Raglan Kaiori Run: 2017</li>
                  <li className="list-group-item">Auckland North Shore Marathon</li>
                  <li className="list-group-item">Auckland North Shore Half Marathon</li>
                  <li className="list-group-item">Bay of Island Classic Ocean Swim</li>
                  <li className="list-group-item">Takapuna Beach Series</li>
                  <li className="list-group-item">Taupo 160K Cycle Challenge</li>
                  <li className="list-group-item">Albany Lake Series</li>
                  
                </ul>
              </div>

            </div>

          </div>
        </div></div>

        <div className="pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-12"><h2 className="mb-4">Qualifications</h2></div>
              <div className="col-md-6">
                <b>Massage Therapy:</b>
                <ul className="list-group mt-4">
                  <li className="list-group-item">Certificate in Neuromuscular Therapy<br/><i>Massage College of New Zealand, Auckland, 2005</i></li>
                  <li className="list-group-item">Diploma in Massage Therapy<br/><i>Massage College of New Zealand, Auckland, 2004 – 2005</i></li>
                  <li className="list-group-item">Certificate in Reflexology and Energy Balancing<br/><i>Massage College of New Zealand, Auckland, 2004</i></li>
                  <li className="list-group-item">Certificate in Sports Massage Therapy<br/><i>Massage College of New Zealand, Auckland, 2003</i></li>
                  <li className="list-group-item">Foundations in Swedish Massage Therapy<br/><i>MINZI, North Shore, 2003</i></li>
                </ul>
              </div>
              <div className="col-md-6">
              <b>Personal Training:</b>
                <ul className="list-group mt-4">
                  <li className="list-group-item">Certificate IV in Fitness SFR40206</li>
                  <li className="list-group-item">Certificate III in Fitness SFR 30206</li>
                  <li className="list-group-item">Certified Menofitness Trainer</li>
                  <li className="list-group-item">REPs Certified Trainer</li>
                </ul><br/>
              <b>Health and Wellness:</b>
                <ul className="list-group mt-4">
                  <li className="list-group-item">Courses in Psychology and Lifespan Development</li>
                  <li className="list-group-item">Interpersonal Skills for Health Professionals Practice</li>
                  <li className="list-group-item">Health in the context of Aotearoa/New Zealand</li>
                </ul>
                **<i>Auckland University</i>
              </div>
          </div>
          </div>
        </div>

        </div>

      </section>
    )


  }

}




export default MeetJenny;