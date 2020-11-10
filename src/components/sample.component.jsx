import React, { useContext } from 'react'
import styled from 'styled-components'
import CTA from './cta.component'
import { ProjectContext } from '../store/Project.context'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../Client'
import HeaderText from './header-text.component'
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

const Header = styled.h2`
	display: inline;
	position: relative;
	&::after {
		position: absolute;
		left: -25%;
		top: 50%;
		z-index: -1;
		content: '';
		display: block;
		width: 150%;
		height: 23px;
		background: rgba(64, 109, 245, 0.63);
	}
`

const ColoredBoxPink = styled.div`
	position: relative;
	width: 360px;
	height: 300px;
	bottom: 240px;
	right: 85px;
	margin: 0 auto;
	background: #ff847f;
	z-index: -1;
`

const Sample = () => {
	const { project } = useContext(ProjectContext)
	const sample = project[1]
	return (
		<div>
			<HeaderText text='Projects' />

			<Container>
				<TextContainer>
					<Image alt='client Image' src={urlFor(sample.websiteImage).url()} />
					<ColoredBoxPink />
				</TextContainer>
				<TextContainer>
					<HeaderText text={sample.clientName} />
					<Text>{sample.description}</Text>
					<CTA />
				</TextContainer>
			</Container>
		</div>
	)
}

export default Sample
