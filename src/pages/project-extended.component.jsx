import React, { useState, useContext, useEffect } from 'react'
import { ProjectContext } from '../store/Project.context'
import { useParams } from 'react-router-dom'

import { motion } from 'framer-motion'
const transition = { duration: 0.6, ease: [0.43, 0.013, 0.23, 0.96] }
const ProjectExtended = () => {
	const { project } = useContext(ProjectContext)
	let id = useParams()

	const [projectExt, setProject] = useState('')
	useEffect(() => {
		const index = project.findIndex(x => x.clientName.toLowerCase() === id.id)
		setProject(project[index])
	}, [id, project])
	console.log(projectExt)

	return (
		<motion.div
			exit={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			transition={transition}
		>
			<h1>{projectExt.clientName}</h1>
		</motion.div>
	)
}

export default ProjectExtended
