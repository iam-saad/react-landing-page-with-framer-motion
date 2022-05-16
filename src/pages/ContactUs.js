import React from 'react';
import styled from 'styled-components';
//Animation
import { motion } from 'framer-motion';
import { pageAnimation, titleAnime } from '../animation';

const ContactUs = () => {
	return (
		<ContactStyle
			variants={pageAnimation}
			exit='exit'
			initial='hidden'
			animate='show'>
			<Title>
				<Hide>
					<motion.h2 variants={titleAnime}>Get in touch.</motion.h2>
				</Hide>
				<div className='line2'></div>
			</Title>
			<div>
				<Hide>
					<Social variants={titleAnime}>
						<Circle />
						<h2>Socials</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnime}>
						<Circle />
						<h2>Send us a message</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnime}>
						<Circle />
						<h2>Drop an email.</h2>
					</Social>
				</Hide>
			</div>
		</ContactStyle>
	);
};

const Hide = styled.div`
	overflow: hidden;
`;

const ContactStyle = styled(motion.div)`
	padding: 5rem 8rem;
	color: #353535;
	min-height: 100vh;
	background: #fff;
	@media (max-width: 1500px) {
		padding: 2rem;
		font-size: 1rem;
	}
`;
const Title = styled.div`
	margin-bottom: 4rem;
	color: black;
`;
const Circle = styled.div`
	border-radius: 50%;
	width: 5rem;
	height: 5rem;
	background: #353535;
	@media (max-width: 1500px) {
		display: none;
	}
`;

const Social = styled(motion.div)`
	display: flex;
	align-items: center;
	h2 {
		margin: 2rem;
	}
	@media (max-width: 1500px) {
		h2 {
			margin: 1rem 0rem;
			font-size: 2.5rem;
		}
	}
`;

export default ContactUs;
