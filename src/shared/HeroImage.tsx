import React from 'react';
import styled, { keyframes } from 'styled-components';
import useVibrant from 'use-vibrant-hook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const bounce = keyframes`
	from {
		transform: translateY(0px);
	}
	to {
		transform: translateY(-10px);
	}
`;

const Image = styled.div<{image: string|null, small?: boolean}>`
	background-image: url(${(props) => props.image});
	height: ${(props) => (props.small ? '40vh' : '100vh')};
	background-size: cover;
	background-position: center;
	position: relative;
	z-index: 1;
	top: -60px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: -60px;

	.scroll-icon {
		width: 100px;
		position: absolute;
		bottom: 20px;
		left: calc(50vw - 50px);
		opacity: 0.4;
		animation: ${bounce} 2s ease-in-out infinite alternate;
	}
`;

const Overlay = styled.div<{dark: [number, number, number] | undefined, light: [number, number, number] | undefined}>`
	height: 100%;
	width: 100%;
	background-image: linear-gradient(
		to bottom right,
		rgba(${(props) => props.dark && props.dark.join(', ')}, 0.4),
		rgba(${(props) => props.light && props.light.join(', ')}, 0.7)
	);
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;

const Content = styled.div`
	color: #fff;
	width: 70vw;
	position: relative;
	box-sizing: border-box;
	padding: 20px;
	border-radius: 10px;
	text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);

	@media only screen and (max-width: 600px) {
		width: 85vw;
	}

	h2 {
		font-size: 1.8em;
	}

	.text {
		font-size: 16px;
	}
`;
export interface Props {
	title: string,
	text: {__html: string},
	image: string|null,
	small?: boolean
}

export default function HeroImage({ title, text, image, small }: Props) {
	const { colors, done } = useVibrant(image);

	return (
		<>
			<Image image={image} small={small}>
				{done && colors && (
					<Overlay
						dark={colors && colors.DarkVibrant && colors.DarkVibrant.rgb}
						light={colors && colors.Vibrant && colors.Vibrant.rgb}
					/>
				)}
				<Content>
					<h2>{title}</h2>
					<div className="text" dangerouslySetInnerHTML={text} />
				</Content>
				{!small && (
					<FontAwesomeIcon
						icon={faChevronDown}
						size="4x"
						className="scroll-icon"
					/>
				)}
			</Image>
		</>
	);
}
