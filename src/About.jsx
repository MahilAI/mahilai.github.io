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
					Welcome to MahilAI. We are a community of tech enthusiasts who want to
					use our powers for good! MahilAI aims to use the powerful technologies
					of Artificial Intelligence and Machine Learning to create solutions
					for Violence Against Women. To this aim, we conduct workshops and have
					a incubator process coming soon! Stay tuned!
				</p>
			</div>
		</div>
	);
};

export default About;
