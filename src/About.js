import React from 'react'
import aboutimg from "./skillimage/about img.png"
import line from "./skillimage/skill right.png"
import double from "./skillimage/double line.png"

const About = () => {
    return (
        <div id='about'>
            <div className='aboutdiv'>
                <div className='aboutright'>

                    <div className='aboutright-top'>
                        <h3 data-aos="flip-down" data-aos-duration="3000">ABOUT ME</h3>
                        <img src={line} alt='' data-aos="flip-down"></img>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'center' }}>


                        <div className='aboutleft' data-aos="fade-right" data-aos-duration="1500">
                            <img src={aboutimg} alt='Img'></img>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
                        <div className='aboutright-middle' data-aos="flip-down" data-aos-duration="3000">
                            <h4 data-aos="fade-left">Full Stack Developer</h4>
<<<<<<< HEAD
                            <p data-aos="fade-right">A passionate Full Stack Developer with Entry Level
                                experience in building responsive and user-friendly
                                web Applications. My expertise lies in both 
                                front-end and back-end technologies
                                allowing me to create seameless solutions that
=======
                            <p data-aos="fade-right">A passionate Full Stack Developer with Entry Level<br></br>
                                experience in building responsive and user-friendly<br></br>
                                web Applications. My expertise lies in both <br></br>
                                front-end and back-end technologies<br></br>
                                allowing me to create seameless solutions that<br></br>
>>>>>>> 71843d427b0f7d693037170cb096e2173f281cba
                                deliver exceptional  user experience.</p>
                        </div>
                        <div className='aboutright-end'>
                            <h4 data-aos="fade-left">Personal Info</h4>
                            <table className='aboutright-info' data-aos="fade-right">
                                <tr>
                                    <th>NAME</th>&nbsp;
                                    <td>Prasanth</td>
                                </tr>
                                <tr> <th>EMAIL</th>&nbsp;
                                    <td>Prasanth0820.k@gmail.com</td>
                                </tr>
                                <tr>
                                    <th>PHONE</th>&nbsp;
                                    <td>9345992950</td>
                                </tr>
                                <tr>
                                    <th>LANGUAGE</th>&nbsp;
                                    <td>English,Tamil</td>
                                </tr>
                            </table>
                        </div>
                        </div>

                    </div>
                </div>

            </div>





        </div>
    )
}

export default About