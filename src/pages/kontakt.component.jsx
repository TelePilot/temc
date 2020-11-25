import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import IconDisplayer from '../components/misc/icon-display.component'

const SegmentContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100%;
	text-align: center;
	justify-content: center;
	z-index: -1;
	text-decoration: none;
`

const Container = styled.div`
	width: 100%;
	height: 100%;
	margin-top: 15vh;
	font-size: 36px;
	display: flex;
	text-align: center;
	justify-content: center;
`
const Segment = styled.div`
	height: 15vh;
	display: flex;
	justify-content: space-evenly;
`
const Segment2 = styled.div`
	padding-top: 35vh;
`

const Photo = styled.div`
	width: 300px;
	height: 300px;
	margin: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: 1px solid grey;
`
const TextHöger = styled.div`
	width: 350px;
	padding: 15px;
	margin: 15px;
	text-align: center;
`

const Text = styled.div`
	padding: 25px;
	margin-top: 25px;
	font-size: 1.5rem;
	width: 50%;
	text-align: center;
	text-decoration: none;

	@media screen and (max-width: 450px) {
		width: 100%;
		font-size: 5vw;
	}
`

const A = styled.a`
	text-decoration: none;
`

const transition = { duration: 0.6, ease: [0.43, 0.013, 0.23, 0.96] }

const Kontakt = () => {
	return (
		<motion.div
			exit={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			transition={transition}>
			<SegmentContainer>
			<svg viewBox="0 0 550 550" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f)">
<path d="M275 450.25C371.65 450.25 450 371.9 450 275.25C450 178.6 371.65 100.25 275 100.25C178.35 100.25 100 178.6 100 275.25C100 371.9 178.35 450.25 275 450.25Z" fill="url(#paint0_linear)" fill-opacity="0.32"/>
</g>
<defs>
<filter id="filter0_f" x="0.000244141" y="0.249756" width="550" height="550" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur"/>
</filter>
<linearGradient id="paint0_linear" x1="275" y1="100.25" x2="275" y2="450.25" gradientUnits="userSpaceOnUse">
<stop stop-color="#376DF9" stop-opacity="0"/>
<stop offset="1" stop-color="#FF60A6"/>
</linearGradient>
</defs>
</svg>
			</SegmentContainer>
			<Container>

			<Text>Vi är en liten studio baserad i Stockholm som bygger hemsidor med det senaste inom webbutveckling. Detta innebär mer insyn under arbetets gång, inga löpande kostnader och tillgång till ett lättförståeligt redigeringsprogram.</Text>
				</Container>
			<Segment>
					{/* <Photo />
					<Text>Maila</Text>
				</Segment>
				<Segment>
					<Text>Eller ring</Text>
					<Photo /> */}
					<Text>Hör av dig till <A href='tel:0707972446'>070-797 2446</A></Text>
				</Segment>
			<Segment2>
			<IconDisplayer />
			</Segment2>
		</motion.div>
	)
}
export default Kontakt
