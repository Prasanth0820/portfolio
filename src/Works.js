import React from 'react'
import bootstrapweb from "./skillimage/bootstrap website.png"
import vook from "./skillimage/vook.png"
import reactweb from "./skillimage/react website.png"
import sleft from "./skillimage/skill left.png"
import rleft from "./skillimage/skill right.png"
import link from './skillimage/link_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import git from './skillimage/github.png'
import wordpress1 from './skillimage/wordpress 1.png'
import wordpress2 from './skillimage/wordpress 2.png'
import WithData from './skillimage/withdata.png'
import WithoutData from './skillimage/without data.png'
import qrcode from './skillimage/qrcode.png'
import firebasep from './skillimage/Fire_Base.png'
import crud from './skillimage/Crud.png'
import interior from './skillimage/interior.png'
import chatapplication from './skillimage/Chatapplication.png'
import mern from './skillimage/mern.png'
import bassboom from './skillimage/bassboom.png'






function Works() {
    return (
        <div id='work'>
            <div  className='work-top'>
                <img src={sleft} className='leftline' ></img>
                <h4 data-aos="flip-down" data-aos-duration="2000">WORKS</h4>
                <img src={rleft} className='rightline'></img>
            </div>


            <div className='works'>
                <div class="main">
                    <ul class="cards">
                        <li class="cards_item" data-aos="flip-left" data-aos-easing="linear"
                            data-aos-duration="700">
                            <div class="card">
                                <div class="card_image">
                                    <img src={interior} alt="mixed vegetable salad in a mason jar." />
                                </div>
                                <div class="card_content">
                                    <h2 class="card_title">HTML & CSS</h2>
                                    <div class="card_text ">
                                        <p>The Interior Design Single Page Website is a beautifully crafted, responsive website built using HTML and CSS. It showcases stunning interior designs with a smooth and structured layout.
                                        </p>

                                    </div>
                                    <div className='workbutton'>
                                        <img src={link} alt=''></img>
                                        <a href='https://prasanth0820.github.io/Interior_P/' className='workbtn' target='_blank'>View-Site</a>
                                        <img src={git} alt=''></img>
                                        <a href='' className='workbtn'>Git-Hub</a>
                                    </div>
                                </div>
                            </div>
                        </li>



                        <li class="cards_item" data-aos="flip-left" data-aos-easing="linear"
                            data-aos-duration="1200">
                            <div class="card">
                                <div class="card_image">
                                    <img src={vook} alt="A side view of a plate of figs and berries." />
                                </div>
                                <div class="card_content">
                                    <h2 class="card_title">HTML & CSS,JQUERY UI</h2>
                                    <div class="card_text">
                                        <p>VOOK is a design file which is designed for Client refrence for how the website
                                            are in.
                                            Vook is an innovative speaker website that brings powerful sound to your fingertips.
                                        </p>
                                    </div>
                                    <div className='workbutton3'>

                                       <img src={link} alt=''></img>
                                       <a href='https://prasanth0820.github.io/vook_Speaker/' className='workbtn3' target='_blank'>View-Site</a>
                                
                                        <img src={git} alt=''></img>
                                        <a href='https://github.com/Prasanth0820/vook_Speaker' className='workbtn3' target='_blank'>Git-Hub</a>
                                    
                                    </div>

                                </div>
                            </div>
                        </li>
                        <li class="cards_item" data-aos="flip-left" data-aos-easing="linear"
                            data-aos-duration="1500">
                            <div class="card">
                                <div class="card_image">
                                    <img src={bootstrapweb} alt="mixed vegetable salad in a mason jar." />
                                </div>
                                <div class="card_content">
                                    <h2 class="card_title">BOOTSTRAP, JAVASCRIPT</h2>
                                    <div class="card_text">
                                        <p>The Medical dashboard  provide the entire details about the patient which is created using the ,HTML ,Javascript
                                            and Bootstrap for styling.
                                            The Patient Details Dashboard provides a comprehensive view of all registered patients and their essential information.
                                        </p>
                                    </div>
                                    <div className='workbutton'>
                                        <img src={link} alt=''></img>
                                        <a href='https://prasanth0820.github.io/MDBill/' className='workbtn' target='_blank'>View-Site</a>
                                        <img src={git} alt=''></img>
                                        <a href='https://github.com/Prasanth0820/MDBill' className='workbtn' target='_blank'>Git-Hub</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cards_item" data-aos="flip-left" data-aos-easing="linear"
                            data-aos-duration="1000">
                            <div class="card">
                                <div class="card_image">
                                    <img src={crud} alt="mixed vegetable salad in a mason jar." />
                                </div>
                                <div class="card_content">
                                    <h2 class="card_title">HTML,CSS & JAVASCRIPT</h2>
                                    <div class="card_text">

                                        <p>
                                            A web application built with JavaScript, HTML, and CSS, allowing users to create, read, update, and delete data.
                                            Designed for simplicity and user-friendly interaction with a clean, responsive interface.
                                        </p>
                                    </div>
                                    <div className='workbutton'>
                                        <img src={link} alt=''></img>
                                        <a href='https://prasanth-crud.netlify.app/' className='workbtn' target='_blank'>View-Site</a>
                                        <img src={git} alt=''></img>
                                        <a href='' className='workbtn'>Git-Hub</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cards_item" data-aos="flip-left" data-aos-easing="linear"
                            data-aos-duration="1000">
                            <div class="card">
                                <div class="card_image">
                                    <img src={bassboom} alt="mixed vegetable salad in a mason jar." />
                                </div>
                                <div class="card_content">
                                    <h2 class="card_title">REACT JS</h2>
                                    <div class="card_text">
                                        <p>
                                            BassBoom is here to cater to your every need. Join us today and discover why shopping has never been easier!
                                            BassBoom is your ultimate online shopping destination, designed to make your experience smooth, enjoyable, and efficient.
                                        </p>
                                    </div>
                                    <div className='workbutton'>
                                        <img src={link} alt=''></img>
                                        <a href='https://react-headphone.netlify.app/' className='workbtn'target='_blank'>View-Site</a>
                                        <img src={git} alt=''></img>
                                        <a href='https://github.com/Prasanth0820/React_Shopping' className='workbtn'target='_blank'>Git-Hub</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cards_item" data-aos="flip-left" data-aos-easing="linear"
                            data-aos-duration="700">
                            <div class="card">
                                <div class="card_image">
                                    <img src={chatapplication} alt="mixed vegetable salad in a mason jar." />
                                </div>
                                <div class="card_content">
                                    <h2 class="card_title">REACT JS</h2>
                                    <div class="card_text">
                                        <p>
                                            BassBoom is here to cater to your every need. Join us today and discover why shopping has never been easier!
                                            BassBoom is your ultimate online shopping destination, designed to make your experience smooth, enjoyable, and efficient.
                                        </p>
                                    </div>
                                    <div className='workbutton'>
                                        <img src={link} alt=''></img>
                                        <a href='https://prasanth-chat.netlify.app/'target='_blank' className='workbtn'>View-Site</a>
                                        <img src={git} alt=''></img>
                                        <a href='' className='workbtn'target='_blank'>Git-Hub</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cards_item" data-aos="flip-left" data-aos-easing="linear"
                            data-aos-duration="900">
                            <div class="card">
                                <div class="card_image">
                                    <img src={wordpress1} alt="mixed vegetable salad in a mason jar." />
                                </div>
                                <div class="card_content">
                                    <h2 class="card_title">WORDPRESS</h2>
                                    <div class="card_text">
                                        <p>
                                            A WordPress-based website dedicated to solar panel installation and maintenance, offering reliable solutions and expert services for renewable energy users.
                                            Designed for easy navigation and customer engagement.
                                        </p>
                                    </div>
                                    <div className='workbutton'>
                                        <img src={link} alt=''></img>
                                        <a href='https://prasanth0820.github.io/Wordpress_singlepage/'target='_blank' className='workbtn'>View-Site</a>
                                        <img src={git} alt=''></img>
                                        <a href='https://github.com/Prasanth0820/Wordpress_singlepage'target='_blank' className='workbtn'>Git-Hub</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cards_item" data-aos="flip-left" data-aos-easing="linear"
                            data-aos-duration="1500">
                            <div class="card">
                                <div class="card_image">
                                    <img src={wordpress2} alt="mixed vegetable salad in a mason jar." />
                                </div>
                                <div class="card_content">
                                    <h2 class="card_title">WORDPRESS</h2>
                                    <div class="card_text">
                                        <p>
                                            A platform dedicated to modern agriculture, providing insights, resources, and solutions to enhance farming efficiency and sustainability.
                                            Designed for easy access to farming techniques, tools, and expert guidance.
                                        </p>
                                    </div>
                                    <div className='workbutton'>
                                        <img src={link} alt=''></img>
                                        <a href='https://prasanth0820.github.io/wordpress_multipage/' target='_blank'className='workbtn'>View-Site</a>
                                        <img src={git} alt=''></img>
                                        <a href='https://github.com/Prasanth0820/wordpress_multipage' target='_blank'className='workbtn'>Git-Hub</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cards_item" data-aos="flip-left" data-aos-easing="linear"
                            data-aos-duration="900">
                            <div class="card">
                                <div class="card_image">
                                    <img src={qrcode} alt="mixed vegetable salad in a mason jar." />
                                </div>
                                <div class="card_content">
                                    <h2 class="card_title"> EXPRESS, NODEMON </h2>
                                    <div class="card_text">
                                        <p>
                                            A web application built with Express, EJS, Nodemon, QR package, and Axios, allowing users to generate QR codes instantly for various uses.
                                            Designed for simplicity, efficiency, and seamless user experience.
                                        </p>
                                    </div>
                                    <div className='workbutton'>
                                        <img src={link} alt=''></img>
                                        <a href='https://qr-code-xhf8.onrender.com/' target='_blank'className='workbtn'>View-Site</a>
                                        <img src={git} alt=''></img>
                                        <a href='https://github.com/Prasanth0820/Qr_Code' target='_blank' className='workbtn'>Git-Hub</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cards_item" data-aos="flip-left" data-aos-easing="linear"
                            data-aos-duration="1200">
                            <div class="card">
                                <div class="card_image">
                                    <img src={firebasep} alt="mixed vegetable salad in a mason jar." />
                                </div>
                                <div class="card_content">
                                    <h2 class="card_title">FIREBASE</h2>
                                    <div class="card_text">
                                        <p>
                                            A web application developed with Firebase and JavaScript, enabling users to schedule and manage appointments.
                                            Data is securely stored in Firebase DB for efficient access and management.
                                        </p>
                                    </div>
                                    <div className='workbutton'>
                                        <img src={link} alt=''></img>
                                        <a href='' className='workbtn' target='blank' >View-Site</a>
                                        <img src={git} alt=''></img>
                                        <a href='' className='workbtn'target='_blank'>Git-Hub</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cards_item" data-aos="flip-left" data-aos-easing="linear"
                            data-aos-duration="700">
                            <div class="card">
                                <div class="card_image">
                                    <img src={WithData} alt="mixed vegetable salad in a mason jar." />
                                </div>
                                <div class="card_content">
                                    <h2 class="card_title">NODE JS , EXPRESS & MONGODB</h2>
                                    <div class="card_text">
                                        <p>
                                            A web application built with Express, EJS, Mongoose, Nodemon, and Axios, allowing users to submit data and view it dynamically on a separate page.
                                            Designed for seamless interaction and efficient data handling.
                                        </p>
                                    </div>
                                    <div className='workbutton'>
                                        <div className='zx'>
                                        <img src={link} alt=''></img>
                                        <a href='https://multipge-withdata.onrender.com/' className='workbtn2'target='_blank'>View-Site</a>
                                        </div>
                                       <div className='zx'>
                                       <img src={git} alt=''></img>
                                       <a href='' className='workbtn2'target='_blank'>Git-Hub</a>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cards_item" data-aos="flip-left" data-aos-easing="linear"
                            data-aos-duration="900">
                            <div class="card">
                                <div class="card_image">
                                    <img src={WithoutData} alt="mixed vegetable salad in a mason jar." />
                                </div>
                                <div class="card_content">
                                    <h2 class="card_title">NODE JS , EXPRESS & MONGODB</h2>
                                    <div class="card_text">
                                        <p>
                                            A web application built with Express, EJS, Mongoose, Nodemon, and Axios, where submitted data is stored in the database for efficient management and retrieval.
                                            Designed for seamless backend interaction and data handling.
                                        </p>
                                    </div>
                                    <div className='workbutton'>
                                        <img src={link} alt=''></img>
                                        <a href='https://proje-syyx.onrender.com'target='_blank' className='workbtn'>View-Site</a>
                                        <img src={git} alt=''></img>
                                        <a href='' className='workbtn'target='_blank'>Git-Hub</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cards_item" data-aos="flip-left" data-aos-easing="linear"
                            data-aos-duration="900">
                            <div class="card">
                                <div class="card_image">
                                    <img src={mern} alt="mixed vegetable salad in a mason jar." />
                                </div>
                                <div class="card_content">
                                    <h2 class="card_title">MERN</h2>
                                    <div class="card_text">
                                        <p>
                                            A web application built with Express, EJS, Mongoose, Nodemon, and Axios, where submitted data is stored in the database for efficient management and retrieval.
                                            Designed for seamless backend interaction and data handling.
                                        </p>
                                    </div>
                                    <div className='workbutton'>
                                        <img src={link} alt=''></img>
                                        <a href='' className='workbtn'target='_blank'>View-Site</a>
                                        <img src={git} alt=''></img>
                                        <a href='' className='workbtn'target='_blank'>Git-Hub</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Works