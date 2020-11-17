import React, { useContext, useRef } from 'react'
import styled from 'styled-components'
import SampleCTA from '../cta/samplecta.component'
import { ProjectContext } from '../../store/Project.context'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../../Client'
import HeaderText from '../misc/header-text.component'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ImageSizeContext } from '../../store/image.context'
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
const Image = styled(motion.img)`
	width: 100%;
	height: auto;
`
const ImageResizeCont = styled.div`
	overflow: hidden;
	max-height: 280px;
	width: 600px;
	display: flex;

	@media screen and (max-width: 1000px) {
		width: 100%;
		height: 100%;
	}
	@media screen and (max-width: 900px) {
		width: 100%;
		padding: 0;
	}
	@media screen and (max-width: 700px) {
		height: 100%;
	}
`
const ImgContainer = styled.div`
	height: auto;
	width: 100%;
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
		height: 100%;
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
const TextContainer = styled(motion.div)`
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

const Text = styled(motion.p)`
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

const transition = { duration: 0.6, ease: [0.43, 0.013, 0.23, 0.96] }

const Sample = () => {
	const { project } = useContext(ProjectContext)
	const { pos, setPos } = useContext(ImageSizeContext)
	let sample = project[0]
	const image = useRef(null)
	function isInViewport(element) {
		const rect = element.current.getBoundingClientRect()

		setPos({
			position: {
				x: `${rect.x}px`,
				y: `${rect.y}px`,
			},
			width: '600px',
			project: sample,
		})
	}

	return (
		<div>
			<HeaderText>Projects</HeaderText>

			<Container>
				<ImgContainer>
					<Link
						onClick={() => isInViewport(image)}
						to={`/project/${sample.clientName.toLowerCase()}`}
					>
						<ImageResizeCont>
							<Image
								ref={image}
								id='image'
								transition={transition}
								alt='client Image'
								src={sample.imageUrl}
							/>
						</ImageResizeCont>
					</Link>
				</ImgContainer>
				<TextContainer
					exit={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					initial={{ opacity: 0 }}
					transition={transition}
				>
					<HeaderText>{sample.clientName}</HeaderText>
					<Text
						exit={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						initial={{ opacity: 0 }}
						transition={transition}
					>
						{sample.description}
					</Text>
					<SampleCTA>Kontakt</SampleCTA>
				</TextContainer>
			</Container>
		</div>
	)
}

export default Sample
