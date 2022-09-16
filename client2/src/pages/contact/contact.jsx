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

    </Layout>
  )
}

export default contact