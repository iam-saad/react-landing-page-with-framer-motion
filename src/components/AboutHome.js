import React from 'react';
import hero1 from '../img/home1.png';
// import styled from 'styled-components';
//Styles
import { StyleAbout, StyleDescription, StyleImage, StyleHide } from '../style';

const AboutHome = () => {
	return (
		<StyleAbout>
			<StyleDescription>
				<div className='title'>
					<StyleHide>
						<h1>We work to make</h1>
					</StyleHide>
					<StyleHide>
						<h1>
							your <span>dreams</span>
						</h1>
					</StyleHide>
					<StyleHide>
						<h1>come true.</h1>
					</StyleHide>
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

export default AboutHome;
