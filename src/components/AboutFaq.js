import React from 'react';
//Style
import styled from 'styled-components';
import { StyleAbout } from '../style';

const AboutFaq = () => {
	return (
		<StyleFaq>
			<h2>
				Any Questions? <span>FAQs</span>
			</h2>
			<StyleQuestion>
				<h4>How do I start?</h4>
				<div className='answer'>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
						iusto?
					</p>
				</div>
				<div className='faq-line'></div>
			</StyleQuestion>
			<StyleQuestion>
				<h4>What Products Do You Offer?</h4>
				<div className='answer'>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
						iusto?
					</p>
				</div>
				<div className='faq-line'></div>
			</StyleQuestion>
			<StyleQuestion>
				<h4>Different Payment Methods</h4>
				<div className='answer'>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
						iusto?
					</p>
				</div>
				<div className='faq-line'></div>
			</StyleQuestion>
			<StyleQuestion>
				<h4>Daily Schedule</h4>
				<div className='answer'>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
						iusto?
					</p>
				</div>
				<div className='faq-line'></div>
			</StyleQuestion>
		</StyleFaq>
	);
};

const StyleFaq = styled(StyleAbout)`
	display: block;
	span {
		display: block;
	}
	h2 {
		padding-bottom: 2.5rem;
		font-weight: lighter;
	}
`;

const StyleQuestion = styled.div`
	padding: 2rem 0rem;
	cursor: pointer;
	.answer {
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

export default AboutFaq;
