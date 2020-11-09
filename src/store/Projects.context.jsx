import React, { useState, useEffect, createContext } from 'react'
import sanityClient from '../Client'

export const ProjectsContext = createContext()

const ProjectsContextProvider = props => {
	const [projects, setProjects] = useState([])
	useEffect(() => {
		const projectsQuery = `*[_type == "client"]`

		sanityClient.fetch(projectsQuery).then(projects => {
			const projectsArray = []
			projects.forEach(projects => {
				projectsArray.push(projects)
			})
			setProjects(projectsArray)
		})
		return
	}, [])
	return (
		<ProjectsContext.Provider value={{ projects }}>
			{props.children}
		</ProjectsContext.Provider>
	)
}

export default ProjectsContextProvider
