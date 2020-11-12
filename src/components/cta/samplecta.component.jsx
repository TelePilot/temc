import React from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(64, 109, 245, 0.63);
	border-radius: 12px 7px;
	border: none;
	width: 160px;
	max-height: 60px;
	margin: 0 30px;
	cursor: pointer;

	@media screen and (max-width: 700px) {
		display: none;
		top: 90vh;
		left: 0;
		width: 80%;
		height: 5vh;
		background: rgba(64, 109, 245, 1);
		box-shadow: 0 5px 2px rgba(40, 40, 255, 0.2);
		z-index: 1;
	}
`

const Text = styled.p`
	color: white;
	font-size: 16px;
	padding-right: 20px;
`
const Icon = styled.img``
const SampleCTA = props => {
	const button = document.querySelector(Button)

	gsap.fromTo(
		button,
		{
			x: -200,
			opacity: 0,
		},
		{
			x: 0,
			opacity: 1,
			ease: 'Power2.easeInOut',
			duration: 0.7,
			delay: 2,
		}
	)
	return (
		<Button id='button'>
			<Text>{props.children}</Text>
			<svg
				width='8'
				height='18'
				viewBox='0 0 8 18'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M1 1C8.62672 8.79006 8.90954 8.75176 1 17'
					stroke='white'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</svg>
			<Icon src='' />
		</Button>
	)
}

export default SampleCTA