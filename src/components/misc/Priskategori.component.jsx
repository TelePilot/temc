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
    max-width: 1200px;
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
    margin-bottom: -10px;
`

const Card = styled.div`
    background: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    max-height: 100%;
    padding: 30px;
    box-shadow: 0 4px 2px rgba(0,0,0,0.4);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

const CardColorYellow = styled.div`
background: #ffd840;
position: absolute;
top: 0;
left: 0;
height: 9px;
width: 100%;
border-radius: 10px 10px 0 0;
`
const CardColorGreen = styled.div`
background: #4bd8a8;
position: absolute;
top: 0;
left: 0;
height: 9px;
width: 100%;
border-radius: 10px 10px 0 0;
`
const CardColorBlue = styled.div`
background: #237cca;
position: absolute;
top: 0;
left: 0;
height: 9px;
width: 100%;
border-radius: 10px 10px 0 0;
`


const HeaderText = styled.h2`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 700px) {
        font-size: 7vw;
    }
`

const Title = styled.h2`
    font-size: 1.1rem;
    color: black;
`

const Text = styled.p`
    font-size: 1rem;
    margin: 3px 0;
    text-align: left;
    color: black;
`

const MiniTitle = styled.p`
    display: inline;
    font-size: 0.9rem;
    font-weight: 500;
    margin: 3px 0;
    text-align: center;
    color: black;

    &::after {
    z-index: -1;
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: rgba(64, 109, 245, 0.63);
    }
`

const ButtonYellow = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #ffd840;
	border-radius: 2em;
	border: none;
    width: 100%;
    height: 100%;
	margin: 30px;
	cursor: pointer;
    transition: all 0.2s ease-in-out;

	@media screen and (max-width: 400px) {
		left: 0;
		width: 80%;
    }
    
    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
const ButtonGreen = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #4bd8a8;
	border-radius: 2em;
	border: none;
    width: 100%;
    height: 100%;
	margin: 30px;
	cursor: pointer;
    transition: all 0.2s ease-in-out;

	@media screen and (max-width: 400px) {
		left: 0;
		width: 80%;
    }
    
    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
const ButtonBlue = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #237cca;
	border-radius: 2em;
	border: none;
    width: 100%;
    height: 100%;
	margin: 30px;
	cursor: pointer;
    transition: all 0.2s ease-in-out;

	@media screen and (max-width: 400px) {
		left: 0;
		width: 80%;
    }
    
    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

const PricesContainer = styled.div`
    display: flex;
    padding-top: 20px;
`
const Prices = styled.div`
margin-top: auto;
text-align: center;
font-size: 32px;
line-height: 40px;
font-weight: 500;
color: #4e4852;
font-family: "Open Sans", sans-serif;
`

const MOMS = styled.div`
font-size: 12px;
font-style: italic;
color: #4e4852;
`
const KR = styled.div`
font-size: 12px;
font-style: italic;
color: #4e4852;
padding-top: 17px;
padding-left: 2px;
`

const ButtonTitle = styled.h3`
    font-size: 1rem;
    color: white;
    margin: 15px 0;
`

const Priskategori = () => {
    return (
        <>
            <Container id='container'>
            <HeaderText>Vi erbjuder tre lösningar</HeaderText>
            <PrisWrapper>
                <Card>
                    <CardColorYellow />
                    <Title>B a s i c</Title>
                    <Icon src='/media/bike.svg' />
                    <MiniTitle>Skaffa ditt digitala visitkort</MiniTitle>
                    <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Byggt i Reactjs </Text>
                        <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Möjlighet att redigera </Text>
                    <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Gratis hosting </Text>
                        <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Egen domän </Text>
                        <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Upp till 3 sidor </Text>
                        <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Sociala media länkar</Text>
                        <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Mobilanpassad  </Text>
                        <Text>
                        <svg width="20" height="20" viewBox="0 -3 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7.5" cy="7.5" r="6.5" stroke="#C4C4C4" stroke-width="2"/>
<path d="M1.91504 3.75L12.79 11.625" stroke="#C4C4C4" stroke-width="2"/>
</svg> 3 Designförslag
                        </Text>
                        <Text>
                        <svg width="20" height="20" viewBox="0 -3 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7.5" cy="7.5" r="6.5" stroke="#C4C4C4" stroke-width="2"/>
<path d="M1.91504 3.75L12.79 11.625" stroke="#C4C4C4" stroke-width="2"/>
</svg> E-handel / Webbshop
                        </Text>
                        <PricesContainer><Prices>4990</Prices><KR>kr</KR></PricesContainer>
                        <MOMS>EX. MOMS</MOMS>
                        <ButtonYellow><ButtonTitle>Beställ här</ButtonTitle></ButtonYellow>
                </Card>
                <Card>
                <CardColorGreen />
                <Title>S t a n d a r d</Title>
                <Icon src='/media/sportscar.svg' />
                <MiniTitle>Hemsidor för företagare</MiniTitle>
                <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Byggt i Reactjs </Text>
                        <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Möjlighet att redigera </Text>
                    <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Gratis hosting </Text>
                        <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Egen domän </Text>
                        <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Upp till 8 sidor </Text>
                        <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Sociala media länkar</Text>
                        <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Mobilanpassad  </Text>
                        <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        3 Designförslag  </Text>
                        <Text>
                        <svg width="20" height="20" viewBox="0 -3 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7.5" cy="7.5" r="6.5" stroke="#C4C4C4" stroke-width="2"/>
<path d="M1.91504 3.75L12.79 11.625" stroke="#C4C4C4" stroke-width="2"/>
</svg> E-handel / Webbshop
                        </Text>
                        <PricesContainer><Prices>9990</Prices><KR>kr</KR></PricesContainer>
                        <MOMS>EX. MOMS</MOMS>
                        <ButtonGreen><ButtonTitle>Beställ här</ButtonTitle></ButtonGreen>
                </Card>
                <Card>
                    <CardColorBlue />
                <Title>S k r ä d d a r s y d d</Title>
                <Icon src='/media/rocket.svg' />
                <MiniTitle>Vi gillar en utmaning</MiniTitle>
                    
                <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Byggt i Reactjs </Text>
                        <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Möjlighet att redigera </Text>
                    <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Gratis hosting </Text>
                        <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Egen domän </Text>
                        <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Fritt antal sidor </Text>
                        <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Sociala media länkar</Text>
                        <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Mobilanpassad  </Text>
                        <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        Fria Designförslag  </Text>
                        <Text>
<svg width="25" height="25" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#00ba0f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
E-handel / Webbshop  </Text>
<PricesContainer><Prices>19 990</Prices><KR>kr</KR></PricesContainer>
                        <MOMS>EX. MOMS</MOMS>
                <ButtonBlue><ButtonTitle>Kontakta Teo</ButtonTitle></ButtonBlue>
                </Card>
            </PrisWrapper>
            </Container>   
        </>
    )
}

export default Priskategori
