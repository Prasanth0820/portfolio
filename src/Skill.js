import React from 'react'
import sright from './skillimage/skill right.png'
import sleft from './skillimage/skill left.png'
import html from './skillimage/html5.png'
import css from './skillimage/css.png'
import bootstrap from "./skillimage/bootstrap.png"
import javascript from './skillimage/java-script.png'
import react from "./skillimage/react.png"
import js from "./skillimage/JSon.png"
import wordpress from './skillimage/wordpress.png'
import photoshop from './skillimage/photoshop.png'
import figma from "./skillimage/figma.png"
import gitbash from "./skillimage/gitbash.png"
import github from './skillimage/github.png'
import mongobd from './skillimage/mongodb.png'
import jquerry from './skillimage/jquery.png'
import python from './skillimage/python.png'
import firebase from './skillimage/firebase.png'
import dj from './skillimage/django.png'
import netfy from './skillimage/netfy.png'
import ex from './skillimage/express-js.png'
export const Skill = () => {
  return (
    <div>


      <div className='skillsection'>
        <div className='stop'>
          <img src={sleft} className='skillleft' data-aos="flip-up"></img>
          <h4 data-aos="flip-up">Skills Learned</h4>
          <img src={sright} className='skillright' data-aos="flip-down"></img>
        </div>
            <div className='fullskill'>
            <div className='set1'>
          <img src={html} alt='' data-aos="flip-left" data-aos-easing="linear"
            data-aos-duration="1000"></img>
          <img src={css} alt='' data-aos="flip-left" data-aos-easing="linear"
            data-aos-duration="1200"></img>
          <img src={javascript} alt='' data-aos="flip-left" data-aos-easing="linear"
            data-aos-duration="1400"></img>
          <img src={bootstrap} alt='' data-aos="flip-left" data-aos-easing="linear"
            data-aos-duration="1600"></img>
          <img src={react} alt='' data-aos="flip-left" data-aos-easing="linear"
            data-aos-duration="1800"></img>
          <img src={js} alt='' data-aos="flip-left" data-aos-easing="linear"
            data-aos-duration="2000"></img>
          <img src={wordpress} alt='' data-aos="flip-left" data-aos-easing="linear"
            data-aos-duration="2200"></img>
          <img src={dj} alt='' data-aos="flip-left" data-aos-easing="linear"
            data-aos-duration="2400"></img>
          <img src={ex} alt='' data-aos="flip-left" data-aos-easing="linear"
            data-aos-duration="2600"></img>
          <img src={photoshop} alt='' data-aos="flip-left" data-aos-easing="linear"
            data-aos-duration="1000"></img>
          <img src={figma} alt='' data-aos="flip-left" data-aos-easing="linear"
            data-aos-duration="1200"></img>
          <img src={gitbash} alt='' data-aos="flip-left" data-aos-easing="linear"
            data-aos-duration="1400"></img>
          <img src={github} alt='' data-aos="flip-left" data-aos-easing="linear"
            data-aos-duration="1600"></img>
          <img src={mongobd} alt='' data-aos="flip-left" data-aos-easing="linear"
            data-aos-duration="1800"></img>
          <img src={jquerry} alt='' data-aos="flip-left" data-aos-easing="linear"
            data-aos-duration="2000"></img>
          <img src={python} alt='' data-aos="flip-left" data-aos-easing="linear"
            data-aos-duration="2200"></img>
          <img src={firebase} alt='' data-aos="flip-left" data-aos-easing="linear"
            data-aos-duration="2400"></img>
          <img src={netfy} alt='' className='netfy' data-aos="flip-left" data-aos-easing="linear"
            data-aos-duration="2600"></img>



        </div>
            </div>
      </div>
    </div>
  )
}
