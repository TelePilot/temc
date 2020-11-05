import React from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #d5599e;
	border-radius: 10px;
	border: none;
	max-width: 120px; 
	max-height: 60px;
	margin: 0 30px;
	`
const Text = styled.p`
	color: white;
`
const Icon = styled.img``
const CTA = () => {

	const button = document.querySelector(Button)
	
	gsap.fromTo(button, {
		x: -200,
		opacity: 0,
	},{
		x: 75,
		opacity: 1,
		ease: 'Power2.easeInOut',
		duration: 0.7,
		delay: 2
	})

	return (
		<Button>
			<Text>Kontakta Oss</Text>
			<Icon src='' />
		</Button>
	)
}

export default CTA
