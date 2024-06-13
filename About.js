// src/pages/Laptop.js

import React from 'react';
import './stylesheet/Aboutus.css'
import avatar from '../components/images/avatar.png'
import avatar1 from '../components/images/av1.png'
import avatar2 from '../components/images/av2.jpg'
import avatar3 from '../components/images/av3.png'
import avatar4 from '../components/images/av4.jpg'
import bgpf from '../components/images/bgpf.jpg'




const AboutUs = () => {
  return (
  
    <>
      
      <div className='text-containter'> 
        <h1 className='aboutus-title'>AboutUs</h1>
        <p className='aboutus-body'>
        Welcome to TC Computer, your trusted destination for all things tech! With a passion for innovation and a commitment to customer satisfaction, we strive to provide a top quality products and expert service to meet your computing needs. Behind this amazing website are dedicated teams whose passion drives us forward. Let's delve deeper and get to know them
        </p>
      </div>
      <div className='profile-container' >
        <div className='profile-avatar'>
          <img  src={avatar1} alt='me'/>
          <h3>Mr.Hello</h3>
          <h3>Developer</h3>
        </div>
        <div className='profile-avatar'>
          <img  src={avatar4} alt='me'/>
          <h3>Mr.Hello</h3>
          <h3>Developer</h3>
        </div>
        <div className='profile-avatar'>
          <img  src={avatar} alt='me'/>
          <h3>Mr.Hello</h3>
          <h3>Developer</h3>
        </div>
        </div>
        <div className='profile-container'>
          <div className='profile-avatar'>
            <img  src={avatar2} alt='me'/>
            <h3>Mr.Hello</h3>
            <h3>Developer</h3>
          </div>
          <div className='profile-avatar'>
            <img  src={avatar3} alt='me'/>
            <h3>Mr.Hello</h3>
            <h3>Developer</h3>
          </div>
        </div>
        
    </>
    
  
  );
};

export default AboutUs;