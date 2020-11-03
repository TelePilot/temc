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
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: flex-end;
`
const Title = styled.h2``
const TaglineText = styled.h3``
const TaglineImage = styled.img`
	position: absolute;
	width: 500px;
	height: auto;
	top: 0;
	left: 0;
`

const Tagline = () => {
	const { tagline } = useContext(TaglineContext)
	return (
		<Container>
			<TaglineImage alt='hero image' src={urlFor(tagline.image).url()} />
			<Title>{tagline.title}</Title>
			<TaglineText>{tagline.tagline}</TaglineText>
		</Container>
	)
}

export default Tagline
