import React, { useContext } from 'react'
import styled from 'styled-components'
import { TaglineContext } from '../store/Tagline.context'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../Client'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}
const Container = styled.div`
	width: 100%;
	height: 60vh;
	margin: 25vh 0;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
`
const InnerContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
`
const Title = styled.h2`
position: absolute;
padding-bottom: 70px;

@media screen and (max-width: 700) {
		font-size: 5vw;
	}
`
const TaglineText = styled.h3`
position: absolute;
margin-top: 20px;

@media screen and (max-width: 700) {
		font-size: 4vw;
	}
`
const TaglineImage = styled.img`
	width: 500px;
	height: auto;
	top: 0;
	left: 0;
`

const Tagline = () => {
	const { tagline } = useContext(TaglineContext)
	const taglinetext = document.querySelector(TaglineText)
	const taglinetitle = document.querySelector(Title)
	gsap.registerPlugin(ScrollTrigger)

	gsap.to(taglinetitle, {
		autoAlpha: 0,
		scrollTrigger: {
			trigger: '#image',
			scrub: true,
			ease: 'Power1.out',
			duration: 3,
			start: 'top center',
	}})

	gsap.to(taglinetext, {
		autoAlpha: 0,
		scrollTrigger: {
			trigger: '#image',
			scrub: true,
			ease: 'Power1.out',
			duration: 3,
			start: 'top center'
	}})



	
	return (
		<Container>
			<InnerContainer><TaglineImage id='image' alt='hero image' src={urlFor(tagline.image).url()} /></InnerContainer>
			<Title id='text'>{tagline.title}</Title>
			<TaglineText>{tagline.tagline}</TaglineText>
		</Container>
	)
}

export default Tagline
