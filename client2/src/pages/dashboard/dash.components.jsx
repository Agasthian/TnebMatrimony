import React from 'react'
// import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet'
import {connect} from 'react-redux'

import Layout from '../../components/layout/layout'
import Payments from '../../components/stripe/Payments'

const Dashboard = (props) => {
  return (
    <Layout>
      <Helmet>
        <title>TNEB Matrimony | Dashboard | Sai Matrimony</title>
      </Helmet>

        <Payments/>
        <p>Credits {props.auth.credits}</p>
    
    </Layout>
  )
}

const mapStateToProps = (state)=>{
    return { auth : state.auth}
  }

export default connect(mapStateToProps)(Dashboard)