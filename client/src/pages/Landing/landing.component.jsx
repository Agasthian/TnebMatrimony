import React from 'react'
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';

import Layout from '../../components/layout/layout'


const Landing = () => {
  return (
    <>
    
      <Helmet>
        <title>TNEB Matrimony | Home | Sai Matrimony</title>
      </Helmet>
        <div className="container mx-auto">
            <div className="card">
                <h2>Welcome to TNEB Matrimony</h2>
                
                <Link to='/dash'>dash</Link>
            </div>
        </div>
    
     </>
  )
}

export default Landing