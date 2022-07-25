import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

import './header.scss'
// import { HeaderWrapper } from './header.stlyes'

const Header = (props) => {
  
  const renderContent=() =>{
    switch(props.auth){
      case null:
        return "Loading"
    
      case false: 
      {
          return (
            <a href='/login'>Login / Sign-up </a>
          )
      } 

      default:
        return  <a href='/api/logout'>Log Out</a>
      }
  }
  return (
    // <HeaderWrapper>
            

    // </HeaderWrapper>
    <div className="headerWrapper">
        <h2><Link to='/'>TNEB Matrimony</Link></h2>
            {renderContent()}
    </div>
  )
}

const mapStateToProps = (state) => {
return{
  auth: state.auth
}
}

export default connect(mapStateToProps)(Header)


