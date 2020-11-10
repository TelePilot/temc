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
	width: 100%;
	height: 400px;
	margin-top: 10vh;
`
const Image = styled.img`
	width: 427px;
	height: 367px;
`
const TextContainer = styled.div`
	width: 50%;
`
const Text = styled.p`
text-align: right;
width: 500px;
padding-bottom: 25px;
`
const Header = styled.h2``

const ColoredBoxBlue = styled.div`
	position: relative;
	width: 215px;
	top: 62px;
	height: 23px;
	background: rgba(64, 109, 245, 0.63);
	margin: 0 auto;
	z-index: -1;
`
// SORRY TEO
const ColoredBoxBlueSmall = styled.div`
	position: relative;
	width: 140px;
	top: 62px;
	height: 23px;
	background: rgba(64, 109, 245, 0.63);
	margin: 0 auto;
	z-index: -1;
`

const ColoredBoxPink = styled.div`
	position: relative;
	width: 360px;
	height: 300px;
	bottom: 240px;
	right: 85px;
	margin: 0 auto;
	background: #FF847F;
	z-index: -1;
`

const Sample = () => {
	const { project } = useContext(ProjectContext)
	const sample = project[1]
	return (
		<div><ColoredBoxBlueSmall /><Header>PROJECTS</Header>
		<Container>
			<TextContainer><Image alt='client Image' src={urlFor(sample.websiteImage).url()} /><ColoredBoxPink /></TextContainer>
			<TextContainer>
				<ColoredBoxBlue /><Header>{sample.clientName}</Header>
				<Text>{sample.description}</Text>
				<CTA />
			</TextContainer>
		</Container>
		</div>
	)
}

export default Sample
