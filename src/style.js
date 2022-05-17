import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyleAbout = styled(motion.div)`
	min-height: 90vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 3rem 8rem;
	color: white;
	@media only screen and (max-width: 1200px) {
		min-height: auto;
		display: block;
		padding: 5rem;
	}
	@media only screen and (max-width: 756px) {
		display: block;
		min-height: 80vh;
		padding: 5rem;
		text-align: center;
	}
	@media only screen and (max-width: 428px) {
		padding: 3rem;
		h1 {
			font-size: 4rem;
		}
	}
`;

export const StyleDescription = styled.div`
	flex: 1;
	z-index: 2;
	@media only screen and (max-width: 756px) {
		p,
		button {
			font-size: 1.5rem;
		}
	}
`;

export const StyleImage = styled.div`
	flex: 1;
	padding-left: 5rem;
	overflow: hidden;
	z-index: 2;
	img {
		width: 100%;
		height: 80vh;
		object-fit: cover;
	}
	@media only screen and (max-width: 1200px) {
		padding-left: 0rem;
		padding-top: 5rem;
		img {
			height: 50vh;
		}
	}
	@media only screen and (max-width: 756px) {
		padding-left: 0rem;
		padding-top: 5rem;
		img {
			height: 50vh;
		}
	}
	@media only screen and (max-width: 428px) {
	}
`;

export const StyleHide = styled.div`
	overflow: hidden;
`;
