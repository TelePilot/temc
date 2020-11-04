import React, { useState, useEffect, createContext } from 'react'
import sanityClient from '../Client'

export const ProjectContext = createContext()

const ProjectContextProvider = props => {
	const [project, setProject] = useState('')
	useEffect(() => {
		const projectQuery = `*[_type == "project"]
       `
		sanityClient.fetch(projectQuery).then(project => {
			project.forEach(project => {
				setProject(project)
			})
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
