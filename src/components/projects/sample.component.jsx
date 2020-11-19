import React, { useContext, useRef, useEffect , useState} from 'react'
import styled from 'styled-components'
import SampleCTA from '../cta/samplecta.component'
import { ProjectContext } from '../../store/Project.context'

import HeaderText from '../misc/header-text.component'
import { motion, useAnimation } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ImageSizeContext } from '../../store/image.context'

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
const variants = {
  visible: { opacity: 1, transition: transition },
  hidden: { opacity: 0, transition: transition },
 
}

const Sample = ({inView}) => {
	
	const { project } = useContext(ProjectContext)
	const { setPos } = useContext(ImageSizeContext)

	const [visible, setVisible] = useState(false)
	let sample = project[0]
	const image = useRef(null)
	const headerLoc = useRef(null)
	const textLoc = useRef(null)
	function isInViewport(image, textLoc) {
		const img = image.current.getBoundingClientRect()
		const txt = textLoc.current.getBoundingClientRect()

		setPos({
			project: sample,
			image: {
			position: {
				x: `${img.x}px`,
				y: `${img.y}px`,
			},
			width: '600px',
			},
		
			text: {
				position: {
				x: `${txt.x}px`,
				y: `${txt.y}px`,
			},},
		
		})
	}

	return (
		<motion.div variants={variants} initial="hidden" animate={inView.isVisible ? 'visible' : 'hidden'}>
			<HeaderText>Projects</HeaderText>
			{visible}
			<Container>
				<ImgContainer>
					<Link
						onClick={() => isInViewport(image, textLoc)}
						to={`/project/${sample.clientName.toLowerCase()}`}
					>
						<ImageResizeCont>
							<Image
								ref={image}
								id='image'
							
								alt='client Image'
								src={sample.imageUrl}
							/>
						</ImageResizeCont>
					</Link>
				</ImgContainer>
				<TextContainer
				ref={textLoc}
			
				>
					<HeaderText>{sample.clientName}</HeaderText>
					<Text
					
					>
						{sample.description}
					</Text>
					<SampleCTA>Kontakt</SampleCTA>
				</TextContainer>
			</Container>
		</motion.div>
	)
}

export default Sample
