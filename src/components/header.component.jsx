import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import sanityClient from '../Client'
import imageUrlBuilder from '@sanity/image-url'
import CTA from './cta.component'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}
const Container = styled.div`
	height: auto;
	min-height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-flow: column;
`
const HeaderContentContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	flex-direction: column;
`

const HeaderText = styled.h1`
	color: white;
	font-size: 72px;
	text-align: left;
	width: 450px;
`

const HeroImage = styled.img`
	position: absolute;
	width: 200%;
	height: auto;
	right: -30%;
	top: 0;
	z-index: -1;
`

const Header = () => {
	const headerText = document.querySelector(HeaderText)

	gsap.registerPlugin(ScrollTrigger)

	gsap.fromTo(
		headerText,
		{
			x: -100,
			autoAlpha: 0,
		},
		{
			x: 75,
			autoAlpha: 1,
			ease: 'Power1.easeInOut',
			duration: 0.7,
			delay: 1,
		}
	)

	const [header, setHeader] = useState('')

	useEffect(() => {
		const headerQuery = `*[_type == "header"]`
		sanityClient.fetch(headerQuery).then(header => {
			header.forEach(header => {
				setHeader(header)
			})
		})
		return
	}, [])
	return (
		<Container>
			<HeaderContentContainer>
				<HeroImage
					alt='hero image'
					className='heroimage'
					id='heroimage'
					src={urlFor(header.heroImage).url()}
				/>
				<HeaderText>{header.title}</HeaderText>
				<CTA />
			</HeaderContentContainer>
		</Container>
	)
}

export default Header
