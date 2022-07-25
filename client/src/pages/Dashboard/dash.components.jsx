import React from 'react'
import {Helmet} from 'react-helmet'
import {connect} from 'react-redux'





const Dashboard = (props) => {
  return (
    // <Layout>
    //   <Helmet>
    //     <title>TNEB Matrimony | Dashboard | Sai Matrimony</title>
    //   </Helmet>

    //     <Payments/> 
    //     <p>Credits {props.auth.credits}</p>
    
    // </Layout>
    <h2> Demo dash</h2>
  )
}

const mapStateToProps = (state)=>{
    return { auth : state.auth}
  }

export default connect(mapStateToProps)(Dashboard)