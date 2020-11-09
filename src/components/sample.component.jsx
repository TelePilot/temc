import React, { useContext } from 'react'
import styled from 'styled-components'
import CTA from './cta.component'
import { ProjectContext } from '../store/Project.context'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../Client'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 80%;
`
const Image = styled.img`
	width: 40%;
	height: auto;
`
const TextContainer = styled.div``
const Text = styled.p``
const Header = styled.h2``

const Sample = () => {
	const { project } = useContext(ProjectContext)
	const sample = project[0]
	return (
		<Container>
			<Image alt='client Image' src={urlFor(sample.websiteImage).url()} />
			<TextContainer>
				<Header>{sample.clientName}</Header>
				<Text>{sample.description}</Text>
				<CTA />
			</TextContainer>
		</Container>
	)
}

export default Sample
