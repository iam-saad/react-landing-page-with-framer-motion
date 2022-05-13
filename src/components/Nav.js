import React from 'react';
import styled from 'styled-components';

//Links
import { Link } from 'react-router-dom';

const Nav = () => {
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
				</li>
				<li>
					<Link to='/work'>Our Work.</Link>
				</li>
				<li>
					<Link to='/contact'>Contact Us.</Link>
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
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
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
	}
`;

export default Nav;
