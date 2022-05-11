import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

//Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

const OurWork = () => {
	let navigation = useNavigate();
	return (
		<StyleWork>
			<StyleMovie>
				<h2>The Athlete</h2>
				<div className='line'></div>
				<img
					src={athlete}
					alt='athlete'
					onClick={() => navigation('./the-athlete')}
				/>
			</StyleMovie>
			<StyleMovie>
				<h2>The Racer</h2>
				<div className='line'></div>
				<img
					src={theracer}
					alt='theracer'
					onClick={() => navigation('./the-racer')}
				/>
			</StyleMovie>
			<StyleMovie>
				<h2>Good Times</h2>
				<div className='line'></div>
				<img
					src={goodtimes}
					alt='goodtimes'
					onClick={() => navigation('./good-times')}
				/>
			</StyleMovie>
		</StyleWork>
	);
};

const StyleWork = styled.div`
	padding: 15vh 8rem;
	min-height: 90vh;
	background: #fff;
	color: #000;
`;

const StyleMovie = styled.div`
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

export default OurWork;
