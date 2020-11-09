import React, { useContext } from 'react'
import styled from 'styled-components'
import { ProjectsContext } from '../store/Project.context'
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



const Projects = () => {
    const { projects } = useContext(ProjectsContext)

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
