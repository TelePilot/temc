import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ProjectContext } from '../../store/Project.context'
// import imageUrlBuilder from '@sanity/image-url'
// import sanityClient from '../../Client'

// const builder = imageUrlBuilder(sanityClient)
// function urlFor(source) {
// 	return builder.image(source)
// }
const Container = styled.div`
	margin-top:  585px;
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;

	@media screen and (max-width: 400px) {
		margin-top: 100vh;
	}
`

const Grid = styled.div`
    display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	height: 50%;
`
const Card = styled.div`
	display: flex;
	height: 300px;
	flex-direction: column;
	align-items: center;
	padding: 0 1em 2em 1em;
`

const Title = styled.h2`
	position: absolute;
	padding-top: 60px;
`
const ProjectText = styled.h3`
	position: absolute;
	padding-top: 10px;
`
const ProjectImage = styled.iframe`
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
`


const Projects = () => {
	const { project } = useContext(ProjectContext)

	return (
		<Container>
			<Grid>								
				{project
					? project.map((item, id) => (
						<Card key={id}>
							<Link to={`/project/${item.clientName.toLowerCase()}`}></Link>
								<ProjectImage scrolling="no"  src={item.websiteLink}/>
							</Card>
					  ))
					: null}
			</Grid>
		</Container>
	)
}

export default Projects
