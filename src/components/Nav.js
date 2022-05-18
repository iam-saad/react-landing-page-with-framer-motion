import React, { useState } from 'react';
import styled from 'styled-components';

//Links
import { Link, useLocation } from 'react-router-dom';
//Framer Motion
import { motion } from 'framer-motion';

const Nav = () => {
	const [navActive, setNavActive] = useState(false);
	const navbarHandler = () => {
		setNavActive(!navActive);
	};
	const { pathname } = useLocation();

	return (
		<StyleNav>
			<h1>
				<Link to='/' id='logo'>
					Shutter
				</Link>
			</h1>
			<ul className={navActive ? 'active' : ''}>
				<li onClick={navbarHandler}>
					<Link to='/'>About Us.</Link>
					<Line
						initial={{ width: '0%' }}
						animate={{ width: pathname === '/' ? '100%' : '' }}
						transition={{ duration: 0.75 }}
					/>
				</li>
				<li onClick={navbarHandler}>
					<Link to='/work'>Our Work.</Link>
					<Line
						initial={{ width: '0%' }}
						animate={{ width: pathname === '/work' ? '100%' : '' }}
						transition={{ duration: 0.75 }}
					/>
				</li>
				<li onClick={navbarHandler}>
					<Link to='/contact'>Contact Us.</Link>
					<Line
						initial={{ width: '0%' }}
						animate={{ width: pathname === '/contact' ? '100%' : '' }}
						transition={{ duration: 0.75 }}
					/>
				</li>
			</ul>
			<div className='navToggle' onClick={navbarHandler}>
				<div className={navActive ? 'line line1 active' : 'line line1'}></div>
				<div className={navActive ? 'line line2 active' : 'line line2'}></div>
			</div>
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
		color: white;
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
	.navToggle {
		display: none;
	}
	@media only screen and (max-width: 1200px) {
		padding: 1.5rem 5rem;
		min-height: 7vh;
		ul {
			width: 50%;
		}
	}
	@media only screen and (max-width: 756px) {
		padding: 1.5rem 5rem;
	}
	@media only screen and (max-width: 428px) {
		#logo {
			font-size: 2.2rem;
		}
		.navToggle {
			display: block;
			pointer-events: all;
			cursor: pointer;
			z-index: 2;
		}
		.line {
			height: 0.3rem;
			width: 3rem;
			margin-bottom: 0.3rem;
			background: #23d997;
			pointer-events: none;
			transition: all 1s ease-in-out;
		}
		ul {
			position: fixed;
			top: 0;
			left: 0;
			height: 100vh;
			width: 100%;
			padding: 5rem;
			background: #282828;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			transform: translateX(100%);
			transition: all 1s ease-in-out;
		}
		ul.active {
			transform: translateX(0%);
			transition: all 1s ease-in-out;
		}
		li {
			font-size: 2.5rem;
		}
		.line1.active {
			transform: rotate(45deg) translateY(0.4rem);
			transition: all 1s ease-in-out;
		}
		.line2.active {
			transform: rotate(-45deg) translateY(-0.4rem);
			transition: all 1s ease-in-out;
		}
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
