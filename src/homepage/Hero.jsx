/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import heroImage from './assets/AVAW55.png';
import './hero.css';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import email from './assets/email.png';
import linkedin from './assets/linkedin.png';
import Modal from 'react-modal';
import closeButton from './assets/close.png';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    // zIndex: ,
    maxWidth: '600px',
    minWidth: '300px',
  },
};
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};
export const Hero = () => {
  const toggleMenu = () => {
    var menu = document.querySelector('.menuToggle');
    var nav = document.querySelector('.navigation');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
  };
  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [emailAddress, setEmail] = useState('');
  const [newsletter, setNewsletter] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#ed235c';
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', emailAddress, newsletter }),
    })
      .then(() => '/thank-you/')
      .catch((error) => alert(error));
    setEmail('');
  };
  // const handleChange = (e) => {};
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
          <a style={{ color: '#fff', fontWeight: 400 }} onClick={openModal}>
            Join Community
          </a>
        </div>
        <p className='copyrightText'>@2021. MahilAI</p>
      </section>
      <div className='menuToggle' onClick={toggleMenu}></div>
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
          <a
            href='mailto:aitoendviolenceagainstwomen@gmail.com'
            className='emailBx'
          >
            <img src={email} alt='' />
          </a>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Example Modal'
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '20px',
            }}
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
              Join Our Community
            </h2>
            <button
              onClick={closeModal}
              style={{
                width: '25px',
                height: '25px',
                background: '#111',
                border: 'none',
                borderRadius: '3px',
              }}
            >
              <img
                src={closeButton}
                style={{ width: '20px', height: '20px', padding: '4px' }}
                alt=''
              />
            </button>
          </div>
          <form
            netlify
            style={{ display: 'grid', width: '100%' }}
            name='contact'
            method='POST'
            data-netlify='true'
            data-netlify-honeypot='bot-field'
            onSubmit={handleSubmit}
          >
            <input
              type='email'
              name='email'
              style={{
                width: '100%',
                height: '40px',
                padding: '5px',
                fontSize: '16px',
                marginBottom: '10px',
              }}
              value={emailAddress}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label class='container'>
              Agree to T&C
              <input type='checkbox' checked='checked' />
              <span class='checkmark'></span>
            </label>

            <label class='container'>
              choose to subscribe to email for upcoming events
              <input
                type='checkbox'
                name='newsletter'
                value={newsletter}
                onChange={(e) => setNewsletter(e.target.value)}
              />
              <span class='checkmark'></span>
            </label>
            <input type='hidden' name='form-name' value='contact' />

            <button
              style={{
                width: '100%',
                height: '40px',
                background: '#111',
                border: 'none',
              }}
              type='submit'
            >
              <p style={{ fontSize: '18px', fontWeight: '700', color: '#fff' }}>
                Send
              </p>
            </button>
          </form>
        </Modal>
      </div>
    </div>
  );
};
