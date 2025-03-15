import React, { useRef } from 'react'
import line from './skillimage/contact line.png'
import contact from './skillimage/contact.png'
import linkedin from './skillimage/LinkedIn Circled green.png'
import telegram from './skillimage/Telegram App green.png'
import twitter from "./skillimage/Twitter green.png"
import instaagram from './skillimage/Instagram Circle green.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm("service_bz8dcqr","template_r0c3g6s", form.current, {
          publicKey: 'j5khIw9wC0GgGijiv',
        })
        .then(
          () => {
            alert('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    return (
        <div id='contact'>
           
            <div className='contactsection'>
                <div className='contacttop'>
                    <h4 data-aos="flip-up">Contact Me</h4>
                    <img src={line} alt='line'></img>
                </div>
                <div className='contactimg'>
                    <img src={contact} alt='contactimg'data-aos="flip-left"data-aos-duration="1600"></img>
                </div>
                <div className='formdetails'>
                    <form ref={form} onSubmit={sendEmail}>
                        <input placeholder='Name' className='nametag'data-aos="flip-down" data-aos-duration="3000" name="from_name"></input>
                        <input placeholder='Mail' className='mailtag'data-aos="flip-down" data-aos-duration="3000" name="femail_id"></input> <br></br>
                        <textarea placeholder='Message' className='messagetag'data-aos="flip-down"data-aos-duration="3000" name="message"></textarea><br></br>

                        <a href=''><button type='submit' className='btn'data-aos="flip-down"data-aos-duration="1400">Done</button> </a>
                       
                    </form>
                </div>
                <div className='contacticons'>
                    <a href='https://www.linkedin.com/in/prasanth-k0820/' target='blank'> <img src={linkedin} alt='' data-aos="flip-right"data-aos-duration="3000"></img></a>
                    <a href=''><img src={telegram} alt=''data-aos="flip-right"data-aos-duration="3000"></img></a>
                    <a href=''> <img src={twitter} alt=''data-aos="flip-right"data-aos-duration="3000"></img></a>
                    <a href='https://www.instagram.com/prasanth_kalidoss/' target='_blank'><img src={instaagram} alt=''data-aos="flip-right" data-aos-duration="3000"></img></a>

                </div>
            </div>
        </div>
    )
}

export default Contact