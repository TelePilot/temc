import React, { useContext } from 'react'
import styled from 'styled-components'
import { TaglineContext } from '../store/Tagline.context'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../Client'

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
	return (
		<Container>
			<InnerContainer><TaglineImage alt='hero image' src={urlFor(tagline.image).url()} /></InnerContainer>
			<Title>{tagline.title}</Title>
			<TaglineText>{tagline.tagline}</TaglineText>
		</Container>
	)
}

export default Tagline
