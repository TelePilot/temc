import React, { useContext } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { AboutContext } from '../store/about.context'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../Client'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}
const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	text-align: center;
	justify-content: center;
	color: #4a1f1f;
	background-image: url('/media/about-bg.svg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	font-family: poppins;
	h1 {
		padding: 0 35px 0 0;
	}
`

const Motion = styled(motion.div)`
`

const SegmentContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	gap: 100px;
	padding: 15px;
	margin: 15px;
`

const Segment = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`

const Textcontainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	height: 100%;
`

const Photo = styled.img`
	width: auto;
	height: 40vh;
	margin: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
`
const AboutText = styled.div`
	height: 100%;
	padding: 0 15px;
	margin: 0 15px;
	text-align: center;
`

const About = () => {
	const { about } = useContext(AboutContext)

	return (
		<Motion
			exit={{ opactiy: 0 }}
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
		>
	<Container>
			<SegmentContainer>
				<br />
			<h1>{about.title}</h1>
				<Segment>
					<Photo
					alt='hero image'
					className='heroimage'
					id='heroimage'
					src={urlFor(about.image).url()}/>
				</Segment>
				<Textcontainer>
				<AboutText>{about.description}</AboutText>
			</Textcontainer>
		</SegmentContainer>
	</Container>
</Motion>
	)
}
export default About
