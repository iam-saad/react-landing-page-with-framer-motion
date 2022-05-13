import React from 'react';
import AboutHero from '../components/AboutHome';
import AboutServices from '../components/AboutServices';
import AboutFaq from '../components/AboutFaq';

//Framer Motion
import { pageAnimation } from '../animation';
import { motion } from 'framer-motion';

const AboutUs = () => {
	return (
		<motion.div
			variants={pageAnimation}
			initial='hidden'
			animate='show'
			exit='exit'>
			<AboutHero />
			<AboutServices />
			<AboutFaq />
		</motion.div>
	);
};

export default AboutUs;
