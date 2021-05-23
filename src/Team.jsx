import React from 'react';
import './team.css';

const Team = () => {
	return (
		<div>
			<h1 className='team-title'>MEET OUR TEAM</h1>
			<div
				className='row'
				style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
			>
				<div className='column'>
					<div className='card'>
						<div className='teamContainer'>
							<h2>YUKTI KHOSLA</h2>
							<p className='title'>CHAIRPERSON & RESEARCH LEAD</p>
							<p>
								<button className='button'>
									<a
										style={{ textDecoration: 'none', color: '#fff' }}
										href='mailto:yuktikhosla@gmail.com'
									>
										Contact
									</a>
								</button>
							</p>
						</div>
					</div>
				</div>
				<div className='column'>
					<div className='card'>
						<div className='teamContainer'>
							<h2>SHRILAXMI BHAT</h2>
							<p className='title'>VICE-CHAIRPERSON & CREATIVE LEAD</p>
							<p>
								<button className='button'>
									<a
										style={{ textDecoration: 'none', color: '#fff' }}
										href='mailto:shrilaxmi.bhat@gmail.com'
									>
										Contact
									</a>
								</button>
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
								<button className='button'>
									<a
										style={{ textDecoration: 'none', color: '#fff' }}
										href='mailto:ameyarb1804@gmail.com'
									>
										Contact
									</a>
								</button>
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
								<button className='button'>
									<a
										style={{ textDecoration: 'none', color: '#fff' }}
										href='mailto:harithagb@pesu.pes.edu'
									>
										Contact
									</a>
								</button>
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
								<button className='button'>
									<a
										style={{ textDecoration: 'none', color: '#fff' }}
										href='mailto:fasdf@fasdf.com'
									>
										Contact
									</a>
								</button>
							</p>
						</div>
					</div>
				</div>
				<div className='column'>
					<div className='card'>
						<div className='teamContainer'>
							<h2>ROHAN N KALPAVRUKSHA</h2>
							<p className='title'>COMMUNITY OUTREACH LEAD</p>
							<p>
								<button className='button'>
									<a
										style={{ textDecoration: 'none', color: '#fff' }}
										href='mailto:rkalpavruksha@yahoo.com'
									>
										Contact
									</a>
								</button>
							</p>
						</div>
					</div>
				</div>
				<div className='column'>
					<div className='card'>
						<div className='teamContainer'>
							<h2>POORVI KUNJA</h2>
							<p className='title'>LOGISTICS LEAD</p>
							<p>
								<button className='button'>
									<a
										style={{ textDecoration: 'none', color: '#fff' }}
										href='mailto:poorvisameepkunja@pesu.pes.edu'
									>
										Contact
									</a>
								</button>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
