import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

import './header.styles.scss'

const Header = (props) => {
  
  const renderContent=() =>{
    switch(props.auth){
      case null:
        return "Loading"
    
      case false: 
      {
          return (
            <a href='/login'>Login</a>
          )
      } 

      default:
        return  <a href='/api/logout'>Log Out</a>
      }
  }
  return (
    <div className="headerWrapper">
      <div className='headerFlexBox'>
        <div className='headerFlexBox_Left'>
          <h2><Link to='/'>TNEB Matrimony</Link></h2>
        </div>
        <div className="headerFlexBox_Center">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/dash'>Dashboard</Link></li>
            <li><Link to='/'>Contact</Link></li>
          </ul>
        </div>
        <div className='headerFlexBox_Right'>
          {renderContent()}
          <Link to='/'> <button className="headerRightBtn btn"> Sign Up</button> </Link>
          
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
return{
  auth: state.auth
}
}

export default connect(mapStateToProps)(Header)


