import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css';
import '../assets/css/template.css';



import { Grid, Menu } from 'semantic-ui-react';
const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="BLESSINGS | Atlanta art showcase official site"
      meta={[
        { name: 'description', content: "Blessings art showcase - Atlanta's top showcase of creatives, artists, and photographers | May 23rd, League Tavern" },
        { name: 'keywords', content: 'art, showcase, Atlanta art, Atlanta art showcase, blessings art, blessings, blessings art showcase' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no' }
      ]}
      script={[
        { src: "https://www.googletagmanager.com/gtag/js?id=UA-118150096-1", async: true }
      ]}
    />
    <Grid>
      <Grid.Row stretched>
        <Grid.Column width={14} computer={10} widescreen={10} stretched className="gapFix">
          {children()}
        </Grid.Column>
        <Grid.Column width={2} widescreen={2} className="sidebar">
          <Header />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
