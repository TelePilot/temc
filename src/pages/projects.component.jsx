import React, { useContext } from 'react'
import styled from 'styled-components'
import { ProjectContext } from '../store/Project.context'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../Client'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}
const Container = styled.div`
	width: 100%;
	height: 100%;
`

const Grid = styled.div`
    display: grid;
    grid-template-column: repeat(auto-fill, minmax(300px, 1fr))
    gap: 10px;
`
const Card = styled.div`
	display: flex;
	height: 400px;
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
const ProjectImage = styled.img`
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	border: 2px solid white;
`


const Projects = () => {
	const { project } = useContext(ProjectContext)

	return (
		<Container>
			<Grid>
				{project
					? project.map((item, id) => (
							<Card key={id}>
								<ProjectImage
									alt='website image'
									src={urlFor(item.websiteImage).url()}
								/>
								<Title>{item.clientName}</Title>
								<ProjectText>{item.description}</ProjectText>
							</Card>
					  ))
					: null}
			</Grid>
		</Container>
	)
}

export default Projects
