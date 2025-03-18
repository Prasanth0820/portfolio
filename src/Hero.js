import React from 'react'
import bimg from './skillimage/heroimg.png'
import Downlode from './Downlode'
import BlurText from "./components/BlurText";


const handleAnimationComplete = () => {
  console.log('Animation completed!');
};



const Hero = () => {
  return (
    <div id='home' style={{ display: 'flex', flexWrap: 'wrap' }}>


<<<<<<< HEAD
      <div className='bannercontent' data-aos="fade-up">
=======
      <div className='bannercontent'>
>>>>>>> 71843d427b0f7d693037170cb096e2173f281cba
        <p className='st'>HELLO I'M</p>
        <h1>  <BlurText
          text="PRASANTH"
          delay={400}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-2xl mb-8" /></h1>


        <h3>FULL STACK DEVELOPER</h3>
        <p className='en'>Crafting innovative solutions with passion and precision.<br></br>
          Driven by creativity, focused on results, and inspired by progress.<br></br>
          Let’s build something extraordinary together.</p>
        <button className='hire'>Hire Me</button>
        <Downlode />
      </div>
      <div className='bannerimg' data-aos="fade-down" style={{ marginLeft: 'auto' }}>
        <img src={bimg} className='heroimg'></img>
      </div>

    </div>
  )
}

export default Hero