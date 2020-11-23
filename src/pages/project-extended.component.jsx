import React, { useContext, useState, useEffect } from 'react'
import { ImageSizeContext } from '../store/image.context'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import HeaderText from '../components/misc/header-text.component'
import Projects from '../components/projects/projects.component'
import { ProjectContext } from '../store/Project.context'

const ImageResizeCont = styled(motion.div)`

	height: 380px;
	
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
		background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`
const TextContainer = styled(motion.div)`
	max-width: 600px;
	
	@media screen and (max-width: 400px) {
		font-size: 14px;
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
`
const transition = { duration: 0, ease: [0.8, 0.013, 0.23, 0.96] }
const ProjectExtended = () => {
	const { project } = useContext(ProjectContext)
	const { pos } = useContext(ImageSizeContext)
	let id = useParams()

	const [projectExt, setProject] = useState('')
	useEffect(() => {
		const index = project.findIndex(x => x.clientName.toLowerCase() === id.id)
		setProject(project[index])
	}, [id, project])

	return (
		<motion.div
			exit={{ opacity: 1 }}
			animate={{ opacity: 1 }}
			initial={{ opacity: 1 }}
			transition={transition}
			
		>
			{/* <h1 style={{ zIndex: 99, position: 'relative' }}>
				{pos.project.clientName}
			</h1> */}

			<ImageResizeCont style={{backgroundImage: `url(${projectExt.imageUrl})`}}>
				<HeaderText>{projectExt.clientName}</HeaderText>
			</ImageResizeCont>
			<TextContainer>
			
				<Text>{projectExt.description}</Text>
			</TextContainer>
			<Projects />
		</motion.div>
	)
}

export default ProjectExtended
