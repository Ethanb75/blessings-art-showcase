import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Grid, Menu, Button, Icon } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="sidebarWrap">
        <Menu pointing secondary vertical>
          <Menu.Item name='Info' onClick={() => document.getElementById('info').scrollIntoView({ behavior: 'smooth', block: 'center' })} />
          <Menu.Item name='Artists' onClick={() => document.getElementById('artists').scrollIntoView({ behavior: 'smooth' })} />
          <Menu.Item name='Performers' onClick={() => document.querySelector('.musicWrap').scrollIntoView({ behavior: 'smooth', block: 'center' })} />
          <Menu.Item name='Contact' onClick={() => document.querySelector('footer').scrollIntoView({ behavior: 'smooth' })} />
        </Menu>
        <div>
          <Button className="sideBarBtn" inverted onClick={() => window.open('https://www.eventbrite.com/e/blessings-artist-showcase-tickets-43759043477?utm_campaign=new_event_email&utm_medium=email&utm_source=eb_email&utm_term=viewmyevent_button')}>Buy Tickets</Button>
        </div>
        <div className="social">
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
    )
  }
}

export default Header
