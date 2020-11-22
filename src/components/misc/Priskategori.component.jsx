import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width 968px) {

    }
    `

const PrisWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex: flex-wrap;
    align-items: center;
    gap: 15px;
    padding 0 50px;
`


const Card = styled.div`
    background: #fff;
    display: flex;
    flex-direction: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    pdding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale: 1.02;
        transtition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

const Icon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

const H1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
`

const Title = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`
const Text = styled.p`
    font-size: 1rem;
    text-align: center;
`

const Priskategori = () => {
    return (
        <>
            <Container id='container'>
            <H1>Tre Paket</H1>
            <PrisWrapper>
                <Card>
                    <Icon />
                    <Title>Enkel</Title>
                    <Text>Gratis hosting </Text>
                </Card>
                <Card>
                    <Icon />
                    <Title>Medium</Title>
                    <Text></Text>
                </Card>
                <Card>
                    <Icon />
                    <Title>Custom</Title>
                    <Text></Text>
                </Card>
            </PrisWrapper>
            </Container>   
        </>
    )
}

export default Priskategori
