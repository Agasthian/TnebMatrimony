import React from 'react'

const Header = () => {
  return (
    <div className='h-14 w-screen bg-red-400 text-white font-serif'>
        <div className='flex h-full items-center text-center'>
          <div className='flex-1 text-xl'>
            <h2>Emaily</h2>
          </div>
          <div className='flex-1'>
            <a href='http://localhost:5000/auth/google'>Log in with Google</a>
          </div>
        </div>
    </div>
  )
}

export default Header


