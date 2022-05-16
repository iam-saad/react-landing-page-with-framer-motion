import React from 'react';
import styled from 'styled-components';

//Links
import { Link, useLocation } from 'react-router-dom';
//Framer Motion
import { motion } from 'framer-motion';

const Nav = () => {
	const { pathname } = useLocation();
	return (
		<StyleNav>
			<h1>
				<Link to='/' id='logo'>
					Shutter
				</Link>
			</h1>
			<ul>
				<li>
					<Link to='/'>About Us.</Link>
					<Line
						initial={{ width: '0%' }}
						animate={{ width: pathname === '/' ? '100%' : '' }}
						transition={{ duration: 0.75 }}
					/>
				</li>
				<li>
					<Link to='/work'>Our Work.</Link>
					<Line
						initial={{ width: '0%' }}
						animate={{ width: pathname === '/work' ? '100%' : '' }}
						transition={{ duration: 0.75 }}
					/>
				</li>
				<li>
					<Link to='/contact'>Contact Us.</Link>
					<Line
						initial={{ width: '0%' }}
						animate={{ width: pathname === '/contact' ? '100%' : '' }}
						transition={{ duration: 0.75 }}
					/>
				</li>
			</ul>
		</StyleNav>
	);
};

const StyleNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem 8rem;
	min-height: 10vh;
	width: 100%;
	background: #282828;
	position: sticky;
	top: 0;
	left: 0;
	z-index: 3;
	a {
		color: #fff;
		text-decoration: none;
	}
	h1 {
		font-size: 1.5rem;
	}
	#logo {
		font-size: 1.8rem;
		font-family: 'Lobster', cursive;
	}
	ul {
		list-style: none;
		display: flex;
		justify-content: space-between;
		width: 40%;
	}
	li {
		font-size: 1rem;
		position: relative;
	}
`;

const Line = styled(motion.div)`
	height: 0.3rem;
	width: 0%;
	background: #23d997;
	position: absolute;
	bottom: -80%;
	left: 0%;
`;

export default Nav;
