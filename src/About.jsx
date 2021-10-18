import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';
import leftArrow from './homepage/assets/left-arrow.png';

const About = () => {
	return (
		<div style={{ maxWidth: '1200px', margin: '0 auto' }}>
			<Link
				to='/'
				style={{
					marginTop: '20px',
					background: 'transparent',
					textDecoration: 'none',
					color: '#fff',
					fontSize: '1.4em',
					fontWeight: '300',
					display: 'flex',
					justifyContent: 'center',
					flexWrap: 'nowrap',
				}}
			>
				<img
					src={leftArrow}
					style={{ width: '30px', marginRight: '10px' }}
					alt=''
				/>
				back to home
			</Link>
			<div className='aboutus'>
				<h2>About Us</h2>
				<p>
					Women are subjected to a lot of demeaning practices and societal negligence. In terms of numbers, the number of reports of domestic violence, sexual crimes, and child prostitution is shocking. Almost every woman has an account of molestation at different ages that have caused mental scars and trauma.
MahilAI is an idea born out of these dark and corrosive roots of society today which are very often overlooked.
AI technology can be used to combat atrocities against women, this is the sole belief of MahilAI. Ours is a community at the college level filled with concerned individuals, all set to make a difference and this world a safer place for women.
MahilAI is an attempt to bring the AI revolution to destroy the perils faced by women and to create safe and empowering places for women. It is one step forward to challenge social stigmas, break gender barriers and make the world a better place to live in.
				</p>
			</div>
		</div>
	);
};

export default About;
