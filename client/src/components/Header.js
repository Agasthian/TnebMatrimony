import React from 'react'
import {connect} from 'react-redux'

const Header = (props) => {
  
  const renderContent=() =>{
    switch(props.auth){
      case null:
        return "Loading"
    
      case false:
        return <a href='/auth/google'>Log in with Google </a>

      default:
        return  <a href='/api/logout'>Log Out</a>
      }
  }
  return (
    <div className='h-14 w-screen bg-red-400 text-white font-serif'>
        <div className='flex h-full items-center text-center'>
          <div className='flex-1 text-xl'>
            <h2>Emaily</h2>
          </div>
          <div className='flex-1'>
            {/* <a href='http://localhost:5000/auth/google'>Log in with Google</a> */}
            {renderContent()}
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


