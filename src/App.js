import logo from './logo.svg';
import './App.css';
import { Nav } from './Nav';
import Hero from './Hero';
import About from './About';
import Works from './Works';
import Education from './Education';
import { Skill } from './Skill';
import Contact from './Contact';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
},[]);




  return (
    <div className='App'>
      
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      <Works></Works>
      <Education></Education>
      <Skill></Skill>
      <Contact></Contact>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
