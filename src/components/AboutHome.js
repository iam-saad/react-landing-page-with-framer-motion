import React from 'react';
import hero1 from '../img/home1.png';
import styled from 'styled-components';

const AboutHome = () => {
	return (
		<StyleAbout>
			<StyleDescription>
				<div className='title'>
					<div className='hide'>
						<h1>We work to make</h1>
					</div>
					<div className='hide'>
						<h1>
							your <span>dreams</span>
						</h1>
					</div>
					<div className='hide'>
						<h1>come true.</h1>
					</div>
				</div>
				<p>
					Contact us for nay photography and videography ideas that you have. We
					have professional with amazing skils to help you to achieve this.
				</p>
				<button>Contact Us</button>
			</StyleDescription>
			<StyleImage className='img'>
				<img src={hero1} alt='guy with a camera' />
			</StyleImage>
		</StyleAbout>
	);
};

const StyleAbout = styled.div`
	min-height: 90vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5rem 10rem;
	color: white;
`;

const StyleDescription = styled.div`
	flex: 1;
	padding-right: 5rem;
`;

const StyleImage = styled.div`
	flex: 1;
	padding-left: 5rem;
	img {
		width: 100%;
		height: 80vh;
		object-fit: cover;
	}
`;

export default AboutHome;
