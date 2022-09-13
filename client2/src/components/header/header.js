import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

import {signout, isAuthenticated} from '../../auth'
import './header.styles.scss'




const Header = (props) => {
  
  // const renderContent=() =>{
  //   //this render content uses redux state to find out  user signedin/out 
  //   //- currentlty app using local storage so it is commented out
  //   switch(props.auth){
  //     case null:
  //       return "Loading"
    
  //     case false: 
  //     {
  //         return (
  //           <>
  //             <a href='/signin'>Sign In</a>
  //             <a onClick={()=>{Signout( ()=>{} )}}>Signout</a>
  //             <a href='/login'>Login</a>
  //           </>
  //         )
  //     } 

  //     default:
  //       return  <a href='/api/logout'>Log Out</a>
        
  //     }
  // }

  return (
    <div className="headerWrapper">
      <div className='headerFlexBox'>
        <div className='headerFlexBox_Left'>
          <h2><Link to='/'>Sai Matrimony</Link></h2>
        </div>
        <div className="headerFlexBox_Center">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/dash'>Dashboard</Link></li>
            <li><Link to='/member'>Membership</Link></li>
            <li><Link to='/'>Contact</Link></li>
          </ul>
        </div>
        <div className='headerFlexBox_Right'>
          {/* {renderContent()} */}
          {/* <Link to='/signup'> <button className="headerRightBtn btn"> Sign Up</button> </Link> */}

          {!isAuthenticated() && (
            <>
              <Link to='/signin'>Sign In</Link>   
              <Link to='/signup'> <button className="headerRightBtn btn"> Sign Up</button> </Link>
            </>
          )}

          {isAuthenticated() && (
            <>
              <Link to={`/user/${isAuthenticated().user._id}`}>
                  {`${isAuthenticated().user.name}'s profile`}
              </Link>
              <a style={{marginLeft:'15px'}} onClick={()=>{signout( ()=>{} )}}>Signout</a>
            </>
          )}

          
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


