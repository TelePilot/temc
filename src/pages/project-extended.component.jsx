import React, { useContext } from 'react'

import { ImageSizeContext } from '../store/image.context'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import HeaderText from '../components/misc/header-text.component'
const Image = styled(motion.img)`
	width: 100%;
	height: auto;
`
const ImageResizeCont = styled(motion.div)`
	max-height: 330px;
	height: 280px;
	width: 600px;
	overflow: hidden;
	display: flex;
	position: absolute;
`
const TextContainer = styled(motion.div)`
	max-width: 600px;
	position: absolute;
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
const transition = { duration: 1, ease: [0.8, 0.013, 0.23, 0.96] }
const ProjectExtended = () => {
	// const { project } = useContext(ProjectContext)
	const { pos } = useContext(ImageSizeContext)
	// let id = useParams()

	// const [projectExt, setProject] = useState('')
	// useEffect(() => {
	// 	const index = project.findIndex(x => x.clientName.toLowerCase() === id.id)
	// 	setProject(project[index])
	// }, [id, project])
	// console.log(projectExt.imageUrl)
	return (
		<motion.div
			exit={{ opacity: 1 }}
			animate={{ opacity: 1 }}
			initial={{ opacity: 1 }}
			transition={transition}
		>
			<h1 style={{ zIndex: 99, position: 'relative' }}>
				{pos.project.clientName}
			</h1>

			<ImageResizeCont
				initial={{
					left: pos.image.position.x,
					top: pos.image.position.y,
				}}
				animate={{ width: '100%', left: '0', top: '0', height: '330px' }}
				transition={transition}
			>
				<Image src={pos.project.imageUrl} />
			</ImageResizeCont>
			<TextContainer

					initial={{ left: pos.text.position.x, top: pos.text.position.y}}
					animate={{ left: '100px', top: '350px'}}
					transition={transition}
				>
				<HeaderText>{pos.project.clientName}</HeaderText>
					<Text>
						{pos.project.description}
					</Text>
					</TextContainer>
		</motion.div>
	)
}

export default ProjectExtended
