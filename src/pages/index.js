import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Grid, Menu, Button, Input, Icon, Visibility } from 'semantic-ui-react';

import logo from '../assets/logo.png';
import when from '../assets/calendar2.svg';
import where from '../assets/map4.svg';
import what from '../assets/cs.svg';
import '../assets/css/index.css';

// export below to aws
import barbie from '../assets/artists/arts_barbie.png';
import briana from '../assets/artists/briana_mari.png';
import cheef from '../assets/artists/cheef_sketch.png';
import donald from '../assets/artists/donald_wooten.png';
import music1 from '../assets/artists/eboThaCoolest.png';
import music2 from '../assets/artists/gerven.png';
import inspr from '../assets/artists/inspr.png';
import jess from '../assets/artists/jessnellart.png';
import lennox from '../assets/artists/lennox_ave.png';
import leon from '../assets/artists/leon_mathis.png';
import mello from '../assets/artists/mello_ted.jpg';
import mickey from '../assets/artists/mickeyvin.png';
import mirage from '../assets/artists/mirage.png';
import music3 from '../assets/artists/misticdrops.png';
import phylli from '../assets/artists/phylli_williams.jpg';
import quake from '../assets/artists/quake.png';
import rod from '../assets/artists/rod2.jpg';
import shon from '../assets/artists/shon_pittman.png';
import derrick from '../assets/artists/derrick.jpg';
import prima from '../assets/artists/prima.png';


class IndexPage extends Component {
  state = {
    currentSection: 'info'
  }

  componentDidMount() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-118150096-1');
  }
  render() {
    let ticketLink = 'https://www.eventbrite.com/e/blessings-artist-showcase-tickets-43759043477?utm_campaign=new_event_email&utm_medium=email&utm_source=eb_email&utm_term=viewmyevent_button'
    return (
      <div>
        <div className="videoBackground">
          <video src="https://blessings-art-showcase-site.s3.amazonaws.com/blessings.mp4" muted loop playsInline autoPlay />
        </div>
        <div className="content">
          <div className="logoWrap">
            <img src={logo} />
          </div>
          <header>
            <p>Visual Arts | Photography | Interactive</p>
            <h1>Blessings<span>An Atlanta art showcase</span></h1>

            <div>
              <Button onClick={() => window.open(ticketLink)}>Buy Tickets</Button>
              <Button inverted icon labelPosition='left' className="colorful" onClick={() => window.open(vid)}>
                <Icon name='play' />
                Video
              </Button>
            </div>
            <div className="date">
              <span><Icon name="calendar" />05 / 23</span>
              <span><Icon name="point" />Atlanta, GA</span>
            </div>
          </header>
          <section id="signup1">
            <p>Stay updated on changes by signing up for our newsletter.</p>
            <Input iconPosition='left' placeholder='Email'>
              <Icon name='at' />
              <input />
            </Input>
            <Button inverted>Sign Up</Button>
          </section>
          <section id="info">
            <div>
              <h1>Info</h1>
              <p><strong>Blessings </strong> is an art showcase featuring the hottest artists, photographers, and creatives located in Atlanta, GA. The event is also a fundraiser for the <strong>Cre8tiv Mastermind Art Program</strong> which helps young minds discover their artistic potential. The showcase is the 23rd of May at the League Tavern.</p>
            </div>
            <div>
              <div>
                <img src={when} />
                <p><em>Saturday</em>May 23rd, 2018 | 7pm - 1am </p>
              </div>
              <div>
                <img src={where} />
                <p><em>League Tavern</em> 30 Ivan Allen Junior Boulevard NW, Atlanta</p>
              </div>
              <div>
                <img src={what} />
                <p><em>rodparkerdesigns@gmail.com</em>for any inquiries please contact Rod</p>
              </div>
            </div>
          </section>
          <section id="artists">
            <h2 className="artists__title">Featured Artists <span>click for more</span></h2>
            <div className="artistsWrap">
              <div>
                <img src={rod} />
                <p>Rod Parker</p>
                <div className="artistInfo" onClick={() => window.open('https://www.instagram.com/rodparkerdesigns/')} >
                  <h3>Host / Visual Artist</h3>
                  <span>Click to discover</span>
                </div>
              </div>
              <div>
                <img src={briana} />
                <p>Briana Mari</p>
                <div className="artistInfo" onClick={() => window.open('https://www.instagram.com/_brianamari/')} >
                  <h3>Visual Artist</h3>
                  <span>Click to discover</span>
                </div>
              </div>
              <div>
                <img src={barbie} />
                <p>Arts Barbie</p>
                <div className="artistInfo" onClick={() => window.open('https://www.instagram.com/artsbarbie/')} >
                  <h3>Visual Artist</h3>
                  <span>Click to discover</span>
                </div>
              </div>
              <div>
                <img src={cheef} />
                <p>Cheef Sketch</p>
                <div className="artistInfo" onClick={() => window.open('https://www.instagram.com/cheef_sketch/')} >
                  <h3>Visual Artist</h3>
                  <span>Click to discover</span>
                </div>
              </div>
              <div>
                <img src={donald} />
                <p>Donald Wooten</p>
                <div className="artistInfo" onClick={() => window.open('https://www.instagram.com/ahbseenkwestion/')} >
                  <h3>Visual Artist</h3>
                  <span>Click to discover</span>
                </div>
              </div>
              <div>
                <img src={inspr} />
                <p>Dorvilier Olivier</p>
                <div className="artistInfo" onClick={() => window.open('https://www.instagram.com/inspr.art/')} >
                  <h3>Visual Artist</h3>
                  <span>Click to discover</span>
                </div>
              </div>
              <div>
                <img src={jess} />
                <p>Jess Nell Art</p>
                <div className="artistInfo" onClick={() => window.open('https://www.instagram.com/jessnellart/')} >
                  <h3>Visual Artist</h3>
                  <span>Click to discover</span>
                </div>
              </div>
              <div>
                <img src={lennox} />
                <p>Lennox Ave</p>
                <div className="artistInfo" onClick={() => window.open('https://www.instagram.com/lennoxave/')} >
                  <h3>Photography</h3>
                  <span>Click to discover</span>
                </div>
              </div>
              <div>
                <img src={leon} />
                <p>Leon Mathis</p>
                <div className="artistInfo" onClick={() => window.open('https://www.instagram.com/trvpmathis/')} >
                  <h3>Visual Artist</h3>
                  <span>Click to discover</span>
                </div>
              </div>
              <div>
                <img src={mickey} />
                <p>Fatima Barnes</p>
                <div className="artistInfo" onClick={() => window.open('https://www.instagram.com/mickeyvin/')} >
                  <h3>Visual Artist</h3>
                  <span>Click to discover</span>
                </div>
              </div>
              <div>
                <img src={mirage} />
                <p>Mirage</p>
                <div className="artistInfo" onClick={() => window.open('https://www.instagram.com/miragev/')} >
                  <h3>Visual Artist</h3>
                  <span>Click to discover</span>
                </div>
              </div>
              <div>
                <img src={phylli} />
                <p>Phyllis</p>
                <div className="artistInfo" onClick={() => window.open('https://www.instagram.com/phyllis.iller/')} >
                  <h3>Photography</h3>
                  <span>Click to discover</span>
                </div>
              </div>
              <div>
                <img src={quake} />
                <p>Quake</p>
                <div className="artistInfo" onClick={() => window.open('https://www.instagram.com/quakesolo/')} >
                  <h3>Visual Artist</h3>
                  <span>Click to discover</span>
                </div>
              </div>
              <div>
                <img src={mello} />
                <p>The Mello Teddy</p>
                <div className="artistInfo" onClick={() => window.open('https://www.instagram.com/themelloteddy/')} >
                  <h3>Visual Artist</h3>
                  <span>Click to discover</span>
                </div>
              </div>
              <div>
                <img src={prima} />
                <p>Prima Colour</p>
                <div className="artistInfo" onClick={() => window.open('https://www.instagram.com/primacolour/')} >
                  <h3>Visual Artist</h3>
                  <span>Click to discover</span>
                </div>
              </div>
              <div>
                <img src={derrick} />
                <p>Derrick Rogue</p>
                <div className="artistInfo" onClick={() => window.open('https://www.instagram.com/derrickrogue/')} >
                  <h3>Visual Artist</h3>
                  <span>Click to discover</span>
                </div>
              </div>
              <div>
                <img src={shon} />
                <p>Shon Pittman</p>
                <div className="artistInfo" onClick={() => window.open('https://www.instagram.com/soulfulvoyage/')} >
                  <h3>Visual Artist</h3>
                  <span>Click to discover</span>
                </div>
              </div>
              <div className="last">
                <p>For artist inquiries contact rod</p>
                <a href="mailto:rodparkerdesigns@gmail.com">rodparkerdesigns@gmail.com</a>
              </div>
            </div>
            {/* below are artists: ebo, Gerven, Mistic drops*/}
            <h2 className="music__title">Musical Guests</h2>
            <div className="musicWrap">
              <div>
                <img src={music1} />
                <p>Ebo Tha Coolest</p>
                <div className="artistInfo" onClick={() => window.open('https://www.instagram.com/ebeezytaughtyou/')}>
                  <h3>Guest Host / Featured Artist</h3>
                  <span>Click to discover</span>
                </div>
              </div>
              <div>
                <img src={music2} />
                <p>Gerven</p>
                <div className="artistInfo" onClick={() => window.open('https://www.instagram.com/gerven/')} >
                  <h3>Featured Artist</h3>
                  <span>Click to discover</span>
                </div>
              </div>
              <div>
                <img src={music3} />
                <p>Mistic Drops</p>
                <div className="artistInfo" onClick={() => window.open('https://www.instagram.com/mistic_drops/')} >
                  <h3>Featured Artist</h3>
                  <span>Click to discover</span>
                </div>
              </div>
            </div>
          </section>
          {/* <h3>For information and inquiries, contact rodparkerdesigns@gmail.com</h3> */}
          <section id="tickets">
            <p>
              Buy your tickets online and for a limited time recieve <strong>$5</strong> off.
            </p>
            <Button inverted onClick={() => window.open(ticketLink)}>Buy Tickets</Button>
          </section>
          <footer>
            <div>
              <img src={logo} />
              <div className="socialFooter">
                <a href="https://www.facebook.com/rodparkerdesigns">
                  <Icon name="facebook official" />
                </a>
                <a href="mailto:rodparkerdesigns@gmail.com">
                  <Icon name="mail outline" />
                </a>
                <a href="https://twitter.com/1RodParkerArts">
                  <Icon name="twitter square" />
                </a>
                <a href="https://www.instagram.com/cre8tiv_mastermind/">
                  <Icon name="instagram" />
                </a>
              </div>
            </div>
            <div>
              <p>Stay updated on the event by signing up for our newsletter</p>
              <Input iconPosition='left' placeholder='Email'>
                <Icon name='at' />
                <input />
              </Input>
              <Button inverted>Sign Up</Button>
            </div>
          </footer>
          <h3 className="questions">For information and inquiries, contact <a href="mailto:rodparkerdesigns@gmail.com">rodparkerdesigns@gmail.com</a></h3>
          <div id="copy">
            <span>&copy; 2018 Blessings</span>
            <span><a href="https://antisocial.to/">created by AntiSocial</a></span>
            <span style={{ cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Top</span>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage
