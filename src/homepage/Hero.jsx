/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import heroImage from "./assets/AVAW55.png";
import "./hero.css";
import instagram from "./assets/instagram.png";
import email from "./assets/email.png";
import linkedin from "./assets/linkedin.png";
import Modal from "react-modal";
import closeButton from "./assets/close.png";
import { Link } from "react-router-dom";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		transform: "translate(-50%, -50%)",
		maxWidth: "600px",
		minWidth: "300px",
		borderRadius: "10px",
	},
};

export const Hero = () => {
	const toggleMenu = () => {
		var menu = document.querySelector(".menuToggle");
		var nav = document.querySelector(".navigation");
		menu.classList.toggle("active");
		nav.classList.toggle("active");
	};
	var subtitle;
	const [modalIsOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const afterOpenModal = () => {
		// references are now sync'd and can be accessed.
		subtitle.style.color = "#ed235c";
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		let link = "https://discord.gg/gnPhXybhxX";
		window.location.href = link;
	};
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
					<a
						style={{ color: "#fff", fontWeight: 400, borderRadius: "8px" }}
						onClick={openModal}
					>
						Join Community
					</a>
				</div>
				<p className='copyrightText'>@2021. MahilAI</p>
			</section>
			<div className='menuToggle' onClick={toggleMenu}></div>
			<div className='navigation'>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<a href='/aboutus'>About</a>
					</li>
					<li>
						<a href='/comingsoon'>Projects</a>
					</li>
					<li>
						<a href='/team '>Team</a>
					</li>
					<li>
						<a href='/contactus'>Contact</a>
					</li>
				</ul>
				<div className='socialBar'>
					<ul>
						<li>
							<a href='https://www.linkedin.com/company/mahilai'>
								<img src={linkedin} style={{ width: "100%" }} alt='' />
							</a>
						</li>
						<li>
							<a href='https://www.instagram.com/mahil_ai.pesu/'>
								<img src={instagram} alt='' style={{ width: "100%" }} />
							</a>
						</li>
					</ul>
					<a
						href='mailto:aitoendviolenceagainstwomen@pes.edu'
						className='emailBx'
					>
						<img src={email} alt='' style={{ width: "100%" }} />
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
							display: "flex",
							justifyContent: "space-between",
							marginBottom: "20px",
							borderRadius: "12px",
						}}
					>
						<h2
							ref={(_subtitle) => (subtitle = _subtitle)}
							style={{ fontSize: "30px" }}
						>
							Terms and Conditions
						</h2>
						<button
							onClick={closeModal}
							style={{
								width: "25px",
								height: "25px",
								background: "#fff",
								border: "none",
								borderRadius: "3px",
							}}
						>
							<img
								src={closeButton}
								style={{
									width: "100%",
									padding: "4px",
								}}
								alt=''
							/>
						</button>
					</div>
					<div style={{ padding: "14px", fontSize: "18px" }}>
						<ul>
							<li> Be kind to each other.</li>
							<li>
								No one is here for hatred, and if you're found spreading hate on
								the server, you will be banned.
							</li>
							<li>No NSFW / sexually explicit content or language </li>
							<li>
								If you are one of two users dominating the conversation in a
								channel, please consider moving your conversation to Direct
								Messages.
							</li>
							<li>
								If someone says something that offends them, report the message
								to the Support team immediately
							</li>
							<li>
								No public fighting. Disagreements should remain respectful of
								one another's views. Thank you!
							</li>
						</ul>
					</div>
					<form
						onSubmit={handleSubmit}
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<label class='container'>
							Agree to T&C
							<input type='checkbox' required style={{ borderRadius: "3px" }} />
							<span className='checkmark'></span>
						</label>
						<button
							style={{
								width: "80px",
								float: "right",
								height: "40px",
								background: "#111",
								border: "none",
								fontSize: "18px",
								fontWeight: "700",
								color: "#fff",
								borderRadius: "5px",
							}}
							type='submit'
						>
							JOIN
						</button>
					</form>
				</Modal>
			</div>
		</div>
	);
};
