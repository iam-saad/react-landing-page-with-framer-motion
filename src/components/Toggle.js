import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Toggle = ({ children, title }) => {
	const [toggle, setToggle] = useState(false);
	return (
		<StyledToggle layout onClick={() => setToggle(!toggle)}>
			<motion.h4 layout>{title}</motion.h4>
			{toggle ? children : ''}
			<div className='faq-line'></div>
		</StyledToggle>
	);
};

const StyledToggle = styled(motion.div)`
	padding: 2rem 0rem;
	cursor: pointer;
	.answer {
		padding: 2rem 0rem;
	}
	h4 {
		font-size: 2.5rem;
		padding: 2rem 0rem;
	}
	p {
		font-size: 1.2rem;
		padding: 0.5rem 0rem;
	}
	.faq-line {
		background: #ccc;
		width: 100%;
		height: 0.3rem;
		margin: 2rem 0rem;
	}
`;

export default Toggle;
