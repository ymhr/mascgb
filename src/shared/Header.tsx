import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoWide from 'images/logo-wide.png';
import LogoTall from 'images/logo.png';
import MediaQuery from 'react-responsive';

const NavBar = styled.nav`
	background-image: linear-gradient(
		to bottom,
		rgba(0, 0, 0, 0.5),
		rgba(0, 0, 0, 0)
	);
	padding: 20px;
	position: absolute;
	top: 0;
	display: flex;
	align-items: center;
	z-index: 2;
	color: #fff;
	width: 100vw;
	height: 60px;
	box-sizing: border-box;
	max-width: 100%;

	& h1 {
		margin: 0 20px 0 0;
		padding: 0;
		position: relative;
		top: 4px;

		.responsive-logo {
			width: 100px;
		}
	}

	& ul {
		list-style: none;
		padding: 0;
		margin: 0;

		& li {
			display: inline-block;

			a {
				text-decoration: none;
				color: inherit;
				margin-right: 20px;
			}
		}
	}
`;

export default function Header() {
	return (
		<div>
			<NavBar>
				<Link to="/">
					<h1>
						<MediaQuery query="(max-width: 600px)">
							{(matches) => {
								if (matches)
									return (
										<img
											src={LogoTall}
											alt="MASCGB Logo"
											className="responsive-logo"
										/>
									);

								return <img src={LogoWide} alt="MASCGB Logo" />;
							}}
						</MediaQuery>
					</h1>
				</Link>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about/">About</Link>
					</li>
				</ul>
			</NavBar>
		</div>
	);
}
