import React from 'react';
import hero2 from '../img/home2.png';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';

//Styles
import styled from 'styled-components';
import { StyleAbout, StyleDescription, StyleImage, StyleHide } from '../style';

const AboutServices = () => {
	return (
		<StyleServices>
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
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
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
`;
const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding-top: 5rem;
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
`;

export default AboutServices;
