import React,{useState, useRef, useEffect} from 'react'
import {motion} from 'framer-motion'

import images from './images'
import './section4.styles.scss'


const Section4 = () => {
  
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(()=>{
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[])

  return (
    <div className='section4'>
      <div className="container ">
        <h2>Lots of happy memories begins here! </h2>
        <motion.div ref={carousel} className='carousel' whileTap={{cursor:"grabbing"}}>
          <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className='inner-carousel'>
            {images.map( image =>{
              return (
                <motion.div className='item' key={image}>
                  <img src={image}  alt='matrimony photos'/>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        <h4>Now its your turn to be happily married </h4>
        <button className='btn btn--orange'>Register now</button>
      </div>
    </div>
  )
}

export default Section4