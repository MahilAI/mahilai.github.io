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

export const Hero = () => {
	const toggleMenu = () => {
		var menu = document.querySelector('.menuToggle');
		var nav = document.querySelector('.navigation');
		menu.classList.toggle('active');
		nav.classList.toggle('active');
	};
	var subtitle;
	const [modalIsOpen, setIsOpen] = useState(false);

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
	return (
		<div>
			<section>
				<div className='logo'>MahilAI</div>
				<img src={heroImage} alt='' className='bg' />
				<div className='content'>
					<h2>Our Mission</h2>
					<p>
						Welcome to MahilAI. We are a community of tech enthusiasts who want
						to use our powers for good! MahilAI aims to use the powerful
						technologies of Artificial Intelligence and Machine Learning to
						create solutions for Violence Against Women. To this aim, we conduct
						workshops and have a incubator process coming soon! Stay tuned!
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
						<a href='/'>Home</a>
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
						{/* <li>
							<a href='https://www.facebook.com/Mahilai-102738828507906/'>
								<img src={facebook} alt='' />
							</a>
						</li> */}
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
						style={{ display: 'grid', width: '100%' }}
						name='join'
						method='POST'
						data-netlify='true'
					>
						<input type='hidden' name='form-name' value='join' />
						<input
							type='email'
							name='email'
							required
							style={{
								width: '100%',
								height: '40px',
								padding: '5px',
								fontSize: '16px',
								marginBottom: '10px',
							}}
						/>
						<label class='container'>
							Agree to T&C
							<input type='checkbox' checked='checked' />
							<span className='checkmark'></span>
						</label>

						<label className='container'>
							choose to subscribe to email for upcoming events
							<input type='checkbox' name='newsletter' />
							<span className='checkmark'></span>
						</label>

						<button
							style={{
								width: '100%',
								height: '40px',
								background: '#111',
								border: 'none',
								fontSize: '18px',
								fontWeight: '700',
								color: '#fff',
							}}
							type='submit'
						>
							Send
						</button>
					</form>
				</Modal>
			</div>
		</div>
	);
};
