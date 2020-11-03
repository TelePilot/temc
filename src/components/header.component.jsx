import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import sanityClient from '../Client'
import imageUrlBuilder from '@sanity/image-url'
import CTA from './cta.component'

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
			<HeroImage alt='hero image' src={urlFor(header.heroImage).url()} />
			<HeaderText>{header.title}</HeaderText>
			<CTA />
		</Container>
	)
}

export default Header
