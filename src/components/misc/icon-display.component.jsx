import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 5em;
`

const H1 = styled.h1``

const IconContainer = styled.div`
    height: 100%;
    width: 80%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow: visible;
    gap: 10px;

    @media screen and (max-width: 400px) {
        
    }
`

const Icons = styled.img`
    height: 80px;
    width: 80px;
    opacity: 0.5;

&:hover {
        transform: scale(1.04);
        transition: all 0.2s ease-in-out;
        opacity: 1;
    }

@media screen and (max-width: 700) {
    opacity: 1;
}
@media screen and (max-width: 400px) {
    height: 50px;
    width: 50px;        
}
`

const IconDisplayer = () => {
    return (
        <>
            <H1>Vi använder</H1>
        <Container>
            <IconContainer>
            <Icons src={'/media/github.svg'}/>
            <Icons src={'/media/netlify.svg'}/>
            <Icons className='App-logo' src={'/media/logo512.png'}/>
            <Icons src={'/media/sanity.svg'}/>
            <Icons src={'/media/figma.svg'}/>
            </IconContainer>
        </Container> 
        </>
    )
}

export default IconDisplayer
