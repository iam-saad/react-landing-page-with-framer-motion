import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { UseScroll } from '../components/UseScroll';

//Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

//Framer Motion
import {
	pageAnimation,
	fadeAnime,
	imgAnime,
	lineAnime,
	SliderContainer,
	slider,
	scrollAnime,
} from '../animation';
import { motion } from 'framer-motion';

const OurWork = () => {
	let navigation = useNavigate();
	const [element, controls] = UseScroll();
	const [element2, controls2] = UseScroll();
	return (
		<StyleWork
			variants={pageAnimation}
			initial='hidden'
			animate='show'
			exit='exit'>
			<motion.div variants={SliderContainer}>
				<Frame1 variants={slider}></Frame1>
				<Frame2 variants={slider}></Frame2>
				<Frame3 variants={slider}></Frame3>
				<Frame4 variants={slider}></Frame4>
			</motion.div>
			<StyleMovie>
				<motion.h2 variants={fadeAnime}>The Athlete</motion.h2>
				<motion.div variants={lineAnime} className='line'></motion.div>
				<StyleHide>
					<motion.img
						src={athlete}
						alt='athlete'
						onClick={() => navigation('./the-athlete')}
						variants={imgAnime}
					/>
				</StyleHide>
			</StyleMovie>
			<StyleMovie
				ref={element}
				variants={scrollAnime}
				animate={controls}
				initial='hidden'>
				<motion.h2 variants={fadeAnime}>The Racer</motion.h2>
				<motion.div variants={lineAnime} className='line'></motion.div>
				<StyleHide>
					<img
						src={theracer}
						alt='theracer'
						onClick={() => navigation('./the-racer')}
						variants={imgAnime}
					/>
				</StyleHide>
			</StyleMovie>
			<StyleMovie
				ref={element2}
				variants={scrollAnime}
				animate={controls2}
				initial='hidden'>
				<motion.h2 variants={fadeAnime}>Good Times</motion.h2>
				<motion.div variants={lineAnime} className='line'></motion.div>
				<StyleHide>
					<motion.img
						src={goodtimes}
						alt='goodtimes'
						onClick={() => navigation('./good-times')}
						variants={imgAnime}
					/>
				</StyleHide>
			</StyleMovie>
		</StyleWork>
	);
};

const StyleWork = styled(motion.div)`
	padding: 2rem 8rem;
	min-height: 90vh;
	background: #fff;
	color: #000;
`;

const StyleMovie = styled(motion.div)`
	padding: 2rem 0rem 8rem;
	h2 {
		font-weight: lighter;
		padding-bottom: 1.2rem;
	}
	img {
		height: 80vh;
		width: 100%;
		object-fit: cover;
		cursor: pointer;
	}
	.line {
		height: 0.5rem;
		width: 100%;
		margin-bottom: 4rem;
		background: #23d997;
	}
`;

const StyleHide = styled.div`
	overflow: hidden;
`;

//Animation Frame
const Frame1 = styled(motion.div)`
	position: fixed;
	top: 10%;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 2;
	background: #fffebf;
`;

const Frame2 = styled(Frame1)`
	background: #ff8ebf;
`;

const Frame3 = styled(Frame1)`
	background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
	background: #8effa0;
`;

export default OurWork;
