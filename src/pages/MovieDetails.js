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
							<div className='award'>
								<h3>{award.title}</h3>
								<div className='line'></div>
								<p>{award.description}</p>
							</div>
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

const StyleMovie = styled.div`
	color: #fff;
`;

const StyleHeadline = styled.div`
	min-height: 90vh;
	padding-top: 15vh;
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
			height: 0.5rem;
			margin: 1rem 0rem;
			width: 80%;
			background: #23d997;
		}
		p {
			padding: 2.5rem 0rem;
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