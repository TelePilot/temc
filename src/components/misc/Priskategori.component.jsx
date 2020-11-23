import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    @media screen and (max-width: 800px) {
    
    }
    `

const PrisWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex: flex-wrap;
    align-items: center;
    gap: 15px;
    padding: 0 50px;

    @media screen and (max-width: 800px) {
    flex-direction: column;
}
`
const Icon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

const Card = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 4px 2px rgba(0,0,0,0.4);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`


const HeaderText = styled.h2`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
`

const Title = styled.h2`
    font-size: 1rem;
    color: black;
`
const Text = styled.p`
    font-size: 1rem;
    margin: 3px 0;
    text-align: center;
    color: black;
`

const Priskategori = () => {
    return (
        <>
            <Container id='container'>
            <HeaderText>Vi erbjuder tre lösningar</HeaderText>
            <PrisWrapper>
                <Card>
                    <Icon src='/media/bike.svg' />
                    <Title>Enkel</Title>
                    <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Gratis hosting </Text>
                        <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Gratis webbhotell </Text>
                        <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Tillgång till sanity.io </Text>
                </Card>
                <Card>
                <Icon src='/media/sportscar.svg' />
                <Title>Standard</Title>
                    <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Gratis Hosting </Text>
                    <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Gratis Webbhotell </Text>
                <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Tillgång till sanity.io </Text>
                </Card>
                <Card>
                <Icon src='/media/rocket.svg' />                    <Title>Skräddarsydd</Title>
                    <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      Gratis Hosting   </Text>
                    <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Gratis Webbhotell </Text>
                    <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Tillgång till sanity.io </Text>
                </Card>
            </PrisWrapper>
            </Container>   
        </>
    )
}

export default Priskategori
