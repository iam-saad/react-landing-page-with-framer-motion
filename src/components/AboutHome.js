import React from 'react';
import hero1 from '../img/home1.png';
import Wave from './Wave';
//Styles
import { StyleAbout, StyleDescription, StyleImage, StyleHide } from '../style';

//Animation
import { motion } from 'framer-motion';
import { titleAnime, fadeAnime, imgAnime } from '../animation';

const AboutHome = () => {
	return (
		<StyleAbout>
			<StyleDescription>
				<div className='title'>
					<StyleHide>
						<motion.h1 variants={titleAnime}>We work to make</motion.h1>
					</StyleHide>
					<StyleHide>
						<motion.h1 variants={titleAnime}>
							your <span>dreams</span>
						</motion.h1>
					</StyleHide>
					<StyleHide>
						<motion.h1 variants={titleAnime}>come true.</motion.h1>
					</StyleHide>
				</div>
				<motion.p variants={fadeAnime}>
					Contact us for nay photography and videography ideas that you have. We
					have professional with amazing skils to help you to achieve this.
				</motion.p>
				<motion.button variants={fadeAnime}>Contact Us</motion.button>
			</StyleDescription>
			<StyleImage className='img'>
				<motion.img variants={imgAnime} src={hero1} alt='guy with a camera' />
			</StyleImage>
			<Wave />
		</StyleAbout>
	);
};

export default AboutHome;
