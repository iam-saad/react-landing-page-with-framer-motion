import React, { useEffect, useState } from 'react';
import { MovieState } from '../movieState';

import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const MovieDetails = () => {
	const [movies, setMovies] = useState(MovieState);
	const [movie, setMovie] = useState(null);

	const location = useLocation();
	const url = location.pathname;

	useEffect(() => {
		const currentMovie = movies.filter((movie) => movie.url === url);
		setMovie(currentMovie[0]);
	}, [movies, url]);

	return (
		<>
			{movie && (
				<StyleMovie>
					<StyleHeadline>
						<h2>{movie.title}</h2>
						<img src={movie.mainImg} alt='main profile' />
					</StyleHeadline>
					<StyleAwards>
						{movie.awards.map((award) => (
							<Award
								key={award.title}
								title={award.title}
								description={award.description}></Award>
						))}
					</StyleAwards>
					<StyleImageDisplay>
						<img src={movie.secondaryImg} alt='second profile' />
					</StyleImageDisplay>
				</StyleMovie>
			)}
		</>
	);
};

const Award = ({ title, description }) => {
	return (
		<div className='award'>
			<h3>{title}</h3>
			<div className='line'></div>
			<p>{description}</p>
		</div>
	);
};

const StyleMovie = styled.div`
	color: #fff;
`;

const StyleHeadline = styled.div`
	min-height: 90vh;
	padding-top: 2rem;
	h2 {
		font-weight: lighter;
		padding: 2rem;
		text-align: center;
	}
	img {
		width: 100%;
		height: 80vh;
		object-fit: cover;
	}
	@media only screen and (max-width: 756px) {
		min-height: auto;
		img {
			height: 100%;
			width: 100%;
		}
	}
`;

const StyleAwards = styled.div`
	min-height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 4rem 10rem;
	.award {
		padding: 4.5rem;
		.line {
			height: 0.4rem;
			margin: 1rem 0rem;
			width: 80%;
			background: #23d997;
		}
		p {
			padding: 2.5rem 0rem;
		}
	}
	@media only screen and (max-width: 1064px) {
		min-height: auto;
		display: block;
		margin: 4rem 5rem;
		.award {
			padding: 2.5rem;
		}
	}
`;

const StyleImageDisplay = styled.div`
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export default MovieDetails;
