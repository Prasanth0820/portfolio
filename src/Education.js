import React from 'react'
import educationimg from "./skillimage/educationimg.png"
import hat from "./skillimage/Graduation Cap.png"
import eline from "./skillimage/eline.png"

const Education = () => {
  return (
    <div>
      <div className='Education-top' >
        <h4 className='edutop'data-aos="flip-down" data-aos-duration="3000" >EDUCATION QUALIFICATION</h4>
        <img src={eline} alt='' className='eduimg'  ></img>
      </div>
      <div className='educationsection'>
        <div className='educationleft'>

          <img src={hat} alt='' className='hatimg1' data-aos="fade-left" data-aos-duration="3000"></img>
          <p className='cont1' data-aos="flip-down" data-aos-duration="3000">Web Design  & Development (WDD)<br></br>
            Web D School , Chennai (2024)</p>

          <img src={hat} alt='' className='hatimg2' data-aos="fade-left" data-aos-duration="3000" ></img>
          <p className='cont2' data-aos="flip-down" data-aos-duration="3000">Bachelor in Computer Application (BCA)<br></br>
            Annamalai University (2021-2024)</p>

          <img src={hat} alt='' className='hatimg3' data-aos="fade-left" data-aos-duration="3000"></img>
          <p className='cont3' data-aos="flip-down" data-aos-duration="3000">Higher Secondary <br></br>
            John Dewey Metric Hr Secondary School <br></br>
            (2021)</p>

          <img src={hat} alt='' className='hatimg4' data-aos="fade-left" data-aos-duration="3000"></img>
          <p className='cont4' data-aos="flip-down" data-aos-duration="3000">Secondary(SSLC) <br></br>
            John Dewey Metric Hr Secondary School <br></br>
            (2019)</p>

        </div>
        <div className='educationright' >
          <img src={educationimg} alt='' className='degree'></img>
        </div>
      </div>
    </div>
  )
}

export default Education