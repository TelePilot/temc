import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import SampleCTA from '../cta/samplecta.component'
import { ProjectContext } from '../../store/Project.context'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../../Client'
import HeaderText from '../misc/header-text.component'
const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	width: auto;
	height: 400px;
	margin-top: 10vh;
	gap: 20px;

	@media screen and (min-width: 1300px) {
		justify-content: space-around;
		margin-bottom: 5vh;
	}
	@media screen and (max-width: 700px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 5vh 4%;
		gap: 10vh;
		height: 550px;
		margin-top: 0;
	}
	@media screen and (max-width: 450px) {
	}
`
const Image = styled.img`
	width: 100%;
	height: 100%;
`
const ImgContainer = styled.div`
	height: auto;
	max-width: 600px;
	padding: 0 50px;

	@media screen and (max-width: 1000px) {
		width: 80%;
		height: 80%;
	}
	@media screen and (max-width: 900px) {
		width: 100%;
		padding: 0;
	}
	@media screen and (max-width: 700px) {
		height: height: 100%;
	}
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

	@media screen and (max-width: 1000px) {
		width: 80%;
		height: 80%;
		top: -70%;
		padding: 0;
	}
	@media screen and (max-width: 800px) {
		width: 82%;
		right: 7%;
	}
}
`
const TextContainer = styled.div`
	max-width: 600px;
	margin-right: 20px;
	@media screen and (max-width: 1000px) {
		padding: 0;
		margin-right: 0;
	}
	@media screen and (max-width: 900px) {
		width: 100%;
		padding: 0;
	}
`

const Text = styled.p`
	text-align: right;
	max-width: 600px;
	padding-bottom: 25px;

	@media screen and (max-width: 700px) {
		text-align: center;
		padding: 0;
	}
	@media screen and (max-width: 400px) {
		font-size: 14px;
	}
`

// const Header = styled.h2`
// 	display: inline;
// 	position: relative;
// 	&::after {
// 		position: absolute;
// 		left: -25%;
// 		top: 50%;
// 		z-index: -1;
// 		content: '';
// 		display: block;
// 		width: 150%;
// 		height: 23px;
// 		background: rgba(64, 109, 245, 0.63);
// 	}
// `

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
	let sample = project[0]
	const [count, setCount] = useState(0)

	return (
		<div>
			<HeaderText>Projects</HeaderText>

			<Container>
				<ImgContainer>
					<Image
						onClick={() => {
							setCount(count + 1)
						}}
						alt='client Image'
						src={urlFor(project[count].websiteImage).url()}
					/>
				</ImgContainer>
				<TextContainer>
					<HeaderText>{sample.clientName}</HeaderText>
					<Text>{sample.description}</Text>
					<SampleCTA>Kontakt</SampleCTA>
				</TextContainer>
			</Container>
		</div>
	)
}

export default Sample
