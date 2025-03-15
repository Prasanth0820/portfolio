import React, { useState } from 'react';
import logo1 from './skillimage/logo.png';
import s1 from './skillimage/githubnav.png';
import s2 from './skillimage/linkedinnav.png';
import s3 from './skillimage/whatsappnav.png';

export const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);
    
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    
    return (
        <div>
            <nav className='bg'>
                <div className='nav-container'>
                    
                    {/* Hamburger menu button for mobile */}
                    <div className='hamburger' onClick={toggleMenu}>
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                    </div>
                        <div className='logoimg'>
                    <img src={logo1} className='logo' alt="Logo"></img>
                    </div>                    
                    <div className= {`navbar ${showMenu ? 'active' : ''}`}>
                        <ul>
                            <a href='#home' onClick={() => setShowMenu(false)}><li>Home</li></a>
                            <a href='#about' onClick={() => setShowMenu(false)}><li>About</li></a>
                            <a href='#work' onClick={() => setShowMenu(false)}><li>Work</li></a>
                            <a href='#contact' onClick={() => setShowMenu(false)}><li>Contact</li></a>
                        </ul>
                       
                    </div>
                    <div className='sociallogo'>
                            <a href='https://github.com/Prasanth0820' target='_blank' rel="noopener noreferrer"><img src={s1} alt="GitHub"></img></a>
                            <a href='https://www.linkedin.com/in/prasanth-k0820/' target='_blank' rel="noopener noreferrer"><img src={s2} alt="LinkedIn"></img></a>
                            <a href='https://wa.me/9345992950?text=Hello%20there!' target='_blank' rel="noopener noreferrer"><img src={s3} alt="WhatsApp"></img></a>
                        </div>
                </div>
            </nav>
        </div>
    );
};


// import React from 'react'
// import logo1 from './skillimage/logo.png'
// import s1 from './skillimage/githubnav.png'
// import s2 from './skillimage/linkedinnav.png'
// import s3 from './skillimage/whatsappnav.png'

// export const Nav = () => {
//     return (
//         <div>
//             <nav className='bg'>
//                 <img src={logo1} className='logo'></img>
//                 <div className='navbar'>
//                     <ul>
//                         <a href='#home'><li>Home</li></a>
//                         <a href='#about'><li>About</li></a>
//                         <a href='#work'><li>Work</li> </a>
//                         <a href='#contact'><li>Contact</li></a>
//                     </ul>
//                     <div className='sociallogo'>
//                         <a href='https://github.com/Prasanth0820' target='_blank'><img src={s1}></img></a>
//                         <a href='https://www.linkedin.com/in/prasanth-k0820/' target='_blank'><img src={s2}></img></a>
//                         <a href='https://wa.me/9345992950?text=Hello%20there!' target='_blank' rel="noopener noreferrer"><img src={s3}></img></a>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }
// import React from 'react';
// // import './Navbar.css';

// export const Nav = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="navbar-left">
//           <span className="navbar-standard">Standard</span>
//           <h1 className="navbar-title">Restaurant Mobile App Figma Design.</h1>
//         </div>
        
//         <div className="navbar-right">
//           <div className="lock-container">
//             <i className="fas fa-lock"></i>
//           </div>
//           <div className="password-container">
//             <span className="password-label">Demo password is: </span>
//             <span className="password-value">54321</span>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

