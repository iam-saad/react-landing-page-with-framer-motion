import React from 'react';
import Toggle from './Toggle';
//Style
import styled from 'styled-components';
import { StyleAbout } from '../style';

import { LayoutGroup } from 'framer-motion';
import { UseScroll } from './UseScroll';
import { scrollAnime } from '../animation';

const AboutFaq = () => {
	const [element, controls] = UseScroll();
	return (
		<StyleFaq
			ref={element}
			variants={scrollAnime}
			animate={controls}
			initial='hidden'>
			<h2>
				Any Questions? <span>FAQs</span>
			</h2>
			<LayoutGroup>
				<Toggle title='How do I start?'>
					<div className='answer'>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Quibusdam, iusto?
						</p>
					</div>
				</Toggle>
				<Toggle title='What Products Do You Offer?'>
					<div className='answer'>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Quibusdam, iusto?
						</p>
					</div>
				</Toggle>
				<Toggle title='Different Payment Methods'>
					<div className='answer'>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Quibusdam, iusto?
						</p>
					</div>
				</Toggle>
				<Toggle title='Daily Schedule'>
					<div className='answer'>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Quibusdam, iusto?
						</p>
					</div>
				</Toggle>
			</LayoutGroup>
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

export default AboutFaq;
