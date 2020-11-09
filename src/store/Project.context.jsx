import React, { useState, useEffect, createContext } from 'react'
import sanityClient from '../Client'

export const ProjectContext = createContext()

const ProjectContextProvider = props => {
	const [project, setProject] = useState('')
	const [loaded, setLoaded] = useState(false)
	useEffect(() => {
		const projectQuery = `*[_type == "client"]`
		console.log(projectQuery)
		sanityClient.fetch(projectQuery).then(project => {
			const projectArray = []
			console.log(project)
			project.forEach(project => {
				projectArray.push(project)
			})
			setProject(projectArray)
			setLoaded(true)
		})
		return
	}, [])
	console.log(project)
	return (
		<ProjectContext.Provider value={{ project }}>
			{props.children}
		</ProjectContext.Provider>
	)
}

export default ProjectContextProvider
