import React from 'react'
import {Link} from 'react-router-dom';

import './card.styles.scss';
import placeholder from '../../assets/members/placeholder160.jpg';

const Card = () => {
  return (
    <div className='cardWrapper'>
      <img className='cardWrapper_img' src={placeholder} alt='placeholder' />    
      <h3>David Lynge</h3>
      <button className='btn btn--orange'>
        <Link to='/dash'>View Profile</Link>
      </button>
    </div>
  )
}

export default Card 