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
	margin-top: 25vh;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

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


const Project = () => {
	const { project } = useContext(ProjectContext)
	return (
		<Container>
            <Card>
                <ProjectImage alt='hero image' src={urlFor(project.image).url()} />
            <Title>{project.title}</Title>
			<ProjectText>{project.project}</ProjectText>
            </Card>
            <Card>
                <ProjectImage alt='hero image' src={urlFor(project.image).url()} />
            <Title>{project.title}</Title>
			<ProjectText>{project.project}</ProjectText>
            </Card>
            <Card>
                <ProjectImage alt='hero image' src={urlFor(project.image).url()} />
            <Title>{project.title}</Title>
			<ProjectText>{project.project}</ProjectText>
            </Card>
            <Card>
                <ProjectImage alt='hero image' src={urlFor(project.image).url()} />
            <Title>{project.title}</Title>
			<ProjectText>{project.project}</ProjectText>
            </Card>
            <Card>
                <ProjectImage alt='hero image' src={urlFor(project.image).url()} />
            <Title>{project.title}</Title>
			<ProjectText>{project.project}</ProjectText>
            </Card>
            <Card>
                <ProjectImage alt='hero image' src={urlFor(project.image).url()} />
            <Title>{project.title}</Title>
			<ProjectText>{project.project}</ProjectText>
            </Card>
		</Container>
	)
}

export default Project
