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
	gap: 20px;

	@media screen and (max-width: 700px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-top: 20vh;
		gap: 12vh;
	}
`
const Image = styled.img`
	width: 100%;
	height: 100%;
`
const TextContainer = styled.div`
	width: 50vw;
	height: auto;
	&::after {
		position: relative;
		top: -55%;
		right: 10%;
		z-index: -1;
		content: '';
		display: block;
		width: 70%;
		height: 70%;
		background: #ff847f;
	}

	@media screen and (max-width: 700px) {
		width: 80%;
		height: 80%;
	}
`
const Text = styled.p`
	text-align: right;
	width: 50vw;
	padding-bottom: 25px;

	@media screen and (max-width: 700px) {
		text-align: center;
	}
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

// const ColoredBoxPink = styled.div`
// 	position: relative;
// 	width: 100%;
// 	height: 50%;
// 	bottom: 170px;
// 	right: 30px;
// 	margin: 0 auto;
// 	background: #ff847f;
// 	z-index: -1;
// `

const Sample = () => {
	const { project } = useContext(ProjectContext)
	const sample = project[1]
	return (
		<div>
			<HeaderText>Projects</HeaderText>

			<Container>
				<TextContainer>
					<Image alt='client Image' src={urlFor(sample.websiteImage).url()} />
				</TextContainer>
				<div>
					<HeaderText>{sample.clientName}</HeaderText>
					<Text>{sample.description}</Text>
					<CTA>Kontakt</CTA>
				</div>
			</Container>
		</div>
	)
}

export default Sample
