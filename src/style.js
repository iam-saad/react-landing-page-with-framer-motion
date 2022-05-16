import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyleAbout = styled(motion.div)`
	min-height: 90vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 3rem 8rem;
	color: white;
`;

export const StyleDescription = styled.div`
	flex: 1;
	z-index: 2;
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
`;

export const StyleHide = styled.div`
	overflow: hidden;
`;
