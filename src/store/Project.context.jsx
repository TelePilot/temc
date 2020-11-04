import React, { useState, useEffect, createContext } from 'react'
import sanityClient from '../Client'

export const ProjectContext = createContext()

const ProjectContextProvider = props => {
	const [project, setProject] = useState([])
	useEffect(() => {
		const projectQuery = `*[_type == "client"]`

		sanityClient.fetch(projectQuery).then(project => {
			const projectArray = []
			project.forEach(project => {
				projectArray.push(project)
			})
			setProject(projectArray)
		})
		return
	}, [])
	return (
		<ProjectContext.Provider value={{ project }}>
			{props.children}
		</ProjectContext.Provider>
	)
}

export default ProjectContextProvider
