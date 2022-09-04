import React from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../../components/layout/layout'
import SubHeader from '../../components/subHeader/subHeader.component'

const Membership = () => {
  return (
    <Layout>
        <Helmet>
            <title>TNEB Matrimony | Dashboard | Sai Matrimony</title>
        </Helmet>
        <SubHeader heading='Membership'/>
    </Layout>
  )
}

export default Membership