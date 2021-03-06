import React from 'react';

//Images
import hero2 from '../img/home2.png';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';

//Styles
import styled from 'styled-components';
import { StyleAbout, StyleDescription, StyleImage, StyleHide } from '../style';

//Animation
import { motion } from 'framer-motion';
import { scrollAnime } from '../animation';
import { UseScroll } from './UseScroll';

const AboutServices = () => {
	const [element, controls] = UseScroll();
	return (
		<StyleServices
			ref={element}
			variants={scrollAnime}
			animate={controls}
			initial='hidden'>
			<StyleDescription>
				<div className='title'>
					<StyleHide>
						<h2>
							High <span>quality</span>
						</h2>
					</StyleHide>
					<StyleHide>
						<h2>services.</h2>
					</StyleHide>
				</div>
				<Cards>
					<Card>
						<div className='icon'>
							<img src={clock} alt='clock icon' />
							<h3>Efficency</h3>
						</div>
						<motion.p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						</motion.p>
					</Card>
					<Card>
						<div className='icon'>
							<img src={money} alt='money icon' />
							<h3>Affordable</h3>
						</div>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
					</Card>
					<Card>
						<div className='icon'>
							<img src={diaphragm} alt='diaphragm icon' />
							<h3>Pro Cameras</h3>
						</div>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
					</Card>
					<Card>
						<div className='icon'>
							<img src={teamwork} alt='teamwork icon' />
							<h3>Teamwork</h3>
						</div>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
					</Card>
				</Cards>
			</StyleDescription>
			<StyleImage>
				<img src={hero2} alt='guy with a camera' />
			</StyleImage>
		</StyleServices>
	);
};

//Defing Styles
const StyleServices = styled(StyleAbout)`
	p {
		width: 90%;
		padding: 2rem 0rem 4rem;
		font-size: 1.2rem;
	}
	h2 {
		font-weight: lighter;
	}
	@media only screen and (max-width: 756px) {
		p {
			font-size: 1.5rem;
			text-align: left;
		}
	}
`;
const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding-top: 5rem;
	@media only screen and (max-width: 428px) {
		padding-left: 2rem;
	}
	@media only screen and (max-width: 400px) {
		padding-left: 0rem;
	}
`;
const Card = styled.div`
	flex-basis: 20rem;
	.icon {
		display: flex;
		aligh-item: center;
	}
	h3 {
		font-size: 1.2rem;
		margin-left: 1rem;
		padding: 0.8rem 0.8rem 0.7rem;
		background: white;
		color: black;
	}
	@media only screen and (max-width: 1400px) {
		flex-basis: 18rem;
	}
	@media only screen and (max-width: 1064px) {
		flex-basis: 22rem;
	}
	@media only screen and (max-width: 756px) {
		flex-basis: 19rem;
		.icon {
			img {
				height: 40px;
				width: 40px;
			}
			h3 {
				font-size: 1.5rem;
				padding: 1.3rem;
			}
		}
	}
	@media only screen and (max-width: 480px) {
		flex-basis: 18rem;
	}
`;

export default AboutServices;
