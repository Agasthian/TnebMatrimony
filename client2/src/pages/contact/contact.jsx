import React from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../../components/layout/layout'
import SubHeader from '../../components/subHeader/subHeader.component'

const contact = () => {
  return (
    <Layout>
      <Helmet>
          <title>TNEB Matrimony | Contact Us | Sai Matrimony</title>
      </Helmet>
      <SubHeader heading='Contact Us' page='Contact Us'/>
      <div className="container">
          <br/><br/>
          <h2 className="ui header">
              Membership Details
          </h2>
          <div className="ui divider"></div>
          <h1 className="ui header">Coming Soon. This Page is Under Construction</h1>
          <br/><br/><br/><br/>
      </div>

    </Layout>
  )
}

export default contact