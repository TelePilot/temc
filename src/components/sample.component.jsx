import React, {useContext} from 'react'
import styled from 'styled-components'
import CTA from './cta.component'
import { ProjectContext } from '../store/Project.context'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../Client'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    
`
const Image = styled.img`
    width:40%;
    height: auto;
`
const TextContainer = styled.div`
`
const Text = styled.p``
const Header = styled.h2``



const Sample = () => {
    const { project } = useContext(ProjectContext)
    const sample = project[0]
    console.log(sample)
    return (
            <Container>
             <Image alt="client Image" src={urlFor(project[1].websiteImage).url()}/>
              
                <TextContainer>
                    <Header>{project[0].clientName}</Header>
                    <Text>{project[0].description}</Text>
                    <CTA/>
                </TextContainer>

            </Container>

    )
}

export default Sample
