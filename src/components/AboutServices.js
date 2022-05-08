import React from 'react';
import hero2 from '../img/home2.png';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';

const AboutServices = () => {
	return (
		<section className='services'>
			<div className='img'>
				<img src={hero2} alt='guy with a camera' />
			</div>
			<div className='description'>
				<div className='title'>
					<div className='hide'>
						<h1>
							High <span>quality</span>
						</h1>
					</div>
					<div className='hide'>
						<h1>services.</h1>
					</div>
				</div>
				<div className='services-cards'>
					<div className='card'>
						<div className='icon'>
							<img src={clock} alt='clock icon' />
							<h3>Efficency</h3>
						</div>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
					</div>
					<div className='card'>
						<div className='icon'>
							<img src={money} alt='money icon' />
							<h3>Affordable</h3>
						</div>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
					</div>
					<div className='card'>
						<div className='icon'>
							<img src={diaphragm} alt='diaphragm icon' />
							<h3>Pro Grade Camera</h3>
						</div>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
					</div>
					<div className='card'>
						<div className='icon'>
							<img src={teamwork} alt='teamwork icon' />
							<h3>Teamwork</h3>
						</div>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutServices;
