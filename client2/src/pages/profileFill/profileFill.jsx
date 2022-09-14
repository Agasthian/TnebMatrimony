import React from 'react'
import {Helmet} from 'react-helmet'
import {Link, Navigate, useParams} from 'react-router-dom'
import axios from 'axios'

import BasicDetails from './basicDetails';
import Layout from '../../components/layout/layout'
import SubHeader from '../../components/subHeader/subHeader.component'

const ProfileFill = () => {
  return (

    <Layout>
      <Helmet>
          <title>TNEB Matrimony | Dashboard | Sai Matrimony</title>
      </Helmet>
      <SubHeader heading='Profile'/>
      <br/>
      <br/>
        <div className='ui container'>
            <h2 className="ui header">Profile Details </h2>
            <div className="ui divider"></div> 
            
            <BasicDetails/>
            <br/><br/>
        </div>
    </Layout>    
  )
}

export default ProfileFill