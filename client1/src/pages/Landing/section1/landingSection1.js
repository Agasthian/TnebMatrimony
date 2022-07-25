import React from 'react'
import './landingSection.scss'

const LandingSection1 = () => {
  return (
    <div className='section1Wrapper'>
        <div className="section1Left"></div>
        <div className="section1Right">
            <div className="section1Right_register">
                <div className="section1Right_register-card">
                    <h3 className="heading">
                        Sign/Up
                    </h3>
                    <div className="formWrapper">
                        <form action="">
                            <label htmlFor="name">Name
                                <input type="text" placeholder='John Doe' />
                            </label>
                            
                            <label htmlFor="gender">Gender 
                                <input type="radio" name="gender" id="" />
                            </label>
                            
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingSection1