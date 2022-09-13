import React from 'react'
import {Link} from 'react-router-dom';

import './card.styles.scss';
import placeholder from '../../assets/defaultUser.png';

const Card = ({user}) => {
  
  return (
    <div className='cardWrapper'>
      <div className="cardWrapper_imgclass">
        <img className='cardWrapper_img' src={placeholder} alt='placeholder' />    
      </div>
      <div className="cardWrapper_info">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      <button className='btn btn--orange'>
        <Link to={`/user/${user._id}`}>View Profile</Link>
      </button>

      </div>
      
      
    </div>
  )
}

export default Card 