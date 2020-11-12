import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
const Container = styled.div`
	width: 100wv;
	height: 385px;
	font-size: 36px;
	text-align: center;
	justify-content: center;
	color: #4a1f1f;
	font-family: poppins;

	h1 {
		padding-top: 35px;
	}
`

const SegmentContainer = styled.div`
	display: grid;
	grid-template-rows: auto;
	gap: 10px;
	padding: 15px;
	margin: 15px;
`

const Segment = styled.div`
	display: flex;
	justify-content: space-evenly;
`

const Photo = styled.div`
	width: 300px;
	height: 300px;
	margin: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: grey;
`
const Text = styled.div`
	padding: 15px;
	margin: 15px;
	text-align: center;
`

const About = () => {
	return (
		<motion.div
			exit={{ opactiy: 0 }}
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
		>
			<Container>
				<h1>Abouta oss!</h1>
			</Container>
			<SegmentContainer>
				<Segment>
					<Photo />
					<Text />
				</Segment>
				<Segment>
					<Text />
					<Photo />
				</Segment>
			</SegmentContainer>
		</motion.div>
	)
}
export default About
