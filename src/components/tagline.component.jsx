import React, { useContext } from 'react'
import styled from 'styled-components'
import { TaglineContext } from '../store/Tagline.context'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../Client'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}
const Container = styled.div`
	width: 100%;
	height: 60vh;
	margin-top: 25vh;
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
`
const TaglineText = styled.h3`
position: absolute;
margin-top: 20px;
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
	const taglinetext2 = document.querySelector(Title)

	gsap.fromTo(taglinetext, {
		autoAlpha: 0,
		y: -100,
	},{ 
		autoAlpha: 1,
		ease: 'Power1.out',
		duration: 1,
		y: 0,
		scrollTrigger: {
			trigger: TaglineText,
			start: 'top center+=100',
			markers: true
	}})

	gsap.fromTo(taglinetext2, {
		autoAlpha: 0,
		y: -100,
	},{
		autoAlpha: 1,
		ease: 'Power1.out',
		duration: 1,
		y: 0,
		scrollTrigger: {
			trigger: Title,
			start: 'top center+=100',
			marker: true
	}})

	
	return (
		<Container>
			<InnerContainer><TaglineImage alt='hero image' src={urlFor(tagline.image).url()} /></InnerContainer>
			<Title>{tagline.title}</Title>
			<TaglineText>{tagline.tagline}</TaglineText>
		</Container>
	)
}

export default Tagline
