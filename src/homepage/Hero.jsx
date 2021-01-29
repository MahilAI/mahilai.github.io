import React, { Component } from 'react';
import heroImage from './assets/AVAW55.png';
import './hero.css';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import email from './assets/email.png';
import linkedin from './assets/linkedin.png';

export default class Hero extends Component {
  toggleMenu = () => {
    var menu = document.querySelector('.menuToggle');
    var nav = document.querySelector('.navigation');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
  };
  render() {
    return (
      <div>
        <section>
          <div className='logo'>MahilAI</div>
          <img src={heroImage} alt='' className='bg' />
          <div className='content'>
            <h2>Our Mission</h2>
            <p>
              One in every three women has experienced abuse.
              <br /> It can be in the form of physical, sexual, domestic abuse,
              and so many more ways. Not only are they abused but are also
              rendered responsible. This is a global crisis and knows no
              boundaries. Artificial Intelligence is developing at an
              unprecedented speed and can be used to stop these atrocities.
            </p>
            <a href='/' style={{ color: '#fff', fontWeight: 400 }}>
              Join Community
            </a>
          </div>
          <p className='copyrightText'>@2021. MahilAI</p>
        </section>
        <div className='menuToggle' onClick={this.toggleMenu}></div>
        <div className='navigation'>
          <ul>
            <li>
              <a href='/comingsoon'>Home</a>
            </li>
            <li>
              <a href='/comingsoon'>About</a>
            </li>
            <li>
              <a href='/comingsoon'>Projects</a>
            </li>
            <li>
              <a href='/comingsoon '>Team</a>
            </li>
            <li>
              <a href='/comingsoon'>Contact</a>
            </li>
          </ul>
          <div className='socialBar'>
            <ul>
              <li>
                <a href='https://www.linkedin.com/company/mahilai'>
                  <img src={linkedin} style={{ width: '36px' }} alt='' />
                </a>
              </li>
              <li>
                <a href='https://instagram.com/mahil_ai?igshid=1qvw5ei27vke5'>
                  <img src={instagram} alt='' />
                </a>
              </li>
              <li>
                <a href='https://www.facebook.com/Mahilai-102738828507906/'>
                  <img src={facebook} alt='' />
                </a>
              </li>
            </ul>
            <a href='mailto:you@gmail.com' className='emailBx'>
              <img src={email} alt='' />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
