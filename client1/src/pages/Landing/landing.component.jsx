import React from 'react'
import {Helmet} from "react-helmet";

import Layout from '../../components/layout/layout'
import LandingSection1 from './section1/landingSection1';


const Landing = () => {
  return (
    <Layout>
      <Helmet>
        <title>TNEB Matrimony | Home | Sai Matrimony</title>
      </Helmet>
      <LandingSection1/>
     </Layout>
  )
}

export default Landing