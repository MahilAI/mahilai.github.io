import React from "react";
import "./team.css";
import { Link } from "react-router-dom";
import leftArrow from "./homepage/assets/left-arrow.png";

const Team = () => {
	return (
		<div>
			<Link
				to='/'
				style={{
					marginTop: "30px",
					background: "transparent",
					textDecoration: "none",
					color: "#fff",
					fontSize: "1.4em",
					fontWeight: "300",
					display: "flex",
					justifyContent: "center",
					flexWrap: "nowrap",
				}}
			>
				<img
					src={leftArrow}
					style={{ width: "30px", marginRight: "10px" }}
					alt=''
				/>
				back to home
			</Link>
			<h1 className='team-title'>MEET OUR TEAM</h1>
			<div
				className='row'
				style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
			>
				<div className='column'>
					<div className='card'>
						<div className='teamContainer'>
							<h2>Dr. SHIkHA TRIPATHI</h2>
							<p className='title'>MENTOR</p>
							<p>
								<a
									style={{ textDecoration: "none", color: "#fff" }}
									href='mailto:yuktikhosla@gmail.com'
								>
									<button className='button'>Contact</button>
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				className='row'
				style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
			>
				<div className='column'>
					<div className='card'>
						<div className='teamContainer'>
							<h2>YUKTI KHOSLA</h2>
							<p className='title'>STUDENT HEAD</p>
							<p>
								<a
									style={{ textDecoration: "none", color: "#fff" }}
									href='mailto:yuktikhosla@gmail.com'
								>
									<button className='button'>Contact</button>
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className='column'>
					<div className='card'>
						<div className='teamContainer'>
							<h2>SHRILAXMI BHAT</h2>
							<p className='title'>STUDENT HEAD</p>
							<p>
								<a
									style={{ textDecoration: "none", color: "#fff" }}
									href='mailto:shrilaxmi.bhat@gmail.com'
								>
									<button className='button'>Contact</button>
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className='column'>
					<div className='card'>
						<div className='teamContainer'>
							<h2>AMEYA BHAMARE</h2>
							<p className='title'>RESEARCH LEAD</p>
							<p>
								<a
									style={{ textDecoration: "none", color: "#fff" }}
									href='mailto:ameyarb1804@gmail.com'
								>
									<button className='button'>Contact</button>
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className='column'>
					<div className='card'>
						<div className='teamContainer'>
							<h2>HARITHA GB</h2>
							<p className='title'>AI LEAD</p>
							<p>
								<a
									style={{ textDecoration: "none", color: "#fff" }}
									href='mailto:harithagb@pesu.pes.edu'
								>
									<button className='button'>Contact</button>
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className='column'>
					<div className='card'>
						<div className='teamContainer'>
							<h2>MOHAMMED AFIF AHMED</h2>
							<p className='title'>WEB DEVELOPMENT LEAD</p>
							<p>
								<a
									style={{ textDecoration: "none", color: "#fff" }}
									href='mailto:afifahmed456123@gmail.com'
								>
									<button className='button'>Contact</button>
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className='column'>
					<div className='card'>
						<div className='teamContainer'>
							<h2>ROSHAN N KALPAVRUKSHA</h2>
							<p className='title'>COMMUNITY OUTREACH LEAD</p>
							<p>
								<a
									style={{ textDecoration: "none", color: "#fff" }}
									href='mailto:rkalpavruksha@yahoo.com'
								>
									<button className='button'>Contact</button>
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className='column'>
					<div className='card'>
						<div className='teamContainer'>
							<h2>SAARIM KHURSHEED</h2>
							<p className='title'>LOGISTICS LEAD</p>
							<p>
								<a
									style={{ textDecoration: "none", color: "#fff" }}
									href='mailto:saarim2409@gmail.com'
								>
									<button className='button'>Contact</button>
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className='column'>
					<div className='card'>
						<div className='teamContainer'>
							<h2>ANISHA GHOSH</h2>
							<p className='title'>CONTENT LEAD</p>
							<p>
								<a
									style={{ textDecoration: "none", color: "#fff" }}
									href='mailto:anishaghosh25@gmail.com'
								>
									<button className='button'>Contact</button>
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
