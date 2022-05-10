import React from 'react';
import styled from 'styled-components';

const Nav = () => {
	return (
		<StyleNav>
			<h1>
				<a href='#' id='logo'>
					Shutter
				</a>
			</h1>
			<ul>
				<li>
					<a href='#'>About Us.</a>
				</li>
				<li>
					<a href='#'>Our Work.</a>
				</li>
				<li>
					<a href='#'>Contact Us.</a>
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
	background: #282828;
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
		width: 30%;
	}
	li {
		font-size: 1rem;
	}
`;

export default Nav;
