import React, { useContext } from 'react'
import { ImageSizeContext } from '../../store/image.context'

import { motion } from 'framer-motion'
import styled from 'styled-components'

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
const transition = { duration: 1.1, ease: [1, 0.013, 0.23, 0.96] }
const ProjectImage = ({ image }) => {
	const { pos } = useContext(ImageSizeContext)
	console.log(pos)
	return (
		<ImageResizeCont
			initial={{
				right: pos.position.x,
				top: pos.position.y,
			}}
			animate={{ width: '100%', right: '0', top: '0', height: '330px' }}
			transition={transition}
		>
			<Image src={`${image}?auto=format&q=60`} />
		</ImageResizeCont>
	)
}

export default ProjectImage
