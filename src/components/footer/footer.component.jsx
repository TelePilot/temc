import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import sanityClient from '../../Client'

const Container = styled.div`
	padding-top: 100px;
	height: auto;
	width: 100%;
	height: 200px;
	display: flex;
	justify-content: space-around;
	text-align: center;
`

const NavContainer = styled.div`
display: flex;
justify-content: space-between;
height: auto;

@media screen and (max-width: 700px) {
	display: flex;
	flex-direction: column;
}
`

const Socials = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	padding: 15px;
	height: 150px;
	flex-direction: column;
`

const Img = styled.img`
	height: 50px;
	width: 50px;
	padding: 2px;
`
const InfoContainer = styled.div`
	padding: 15px;
	display: flex;
	flex-flow: column;
	height: auto;
`
const InfoHeader = styled.h4``
const InfoText = styled.p``
const InfoLink = styled(Link)`
	text-decoration: none;
	color: white;
`


const Footer = () => {
	const [footer, setFooter] = useState('')

	useEffect(() => {
		const footerQuery = `*[_type == "footer"]`
		sanityClient.fetch(footerQuery).then(footer => {
			footer.forEach(footer => {
				setFooter(footer)
			})
		})
		return
	}, [])
	return (
		<Container>
				<NavContainer>
					<InfoContainer>
						<InfoHeader>{footer.companyInfo}</InfoHeader>
						<InfoText>
							Måndag - fredag 10.00 - 18.30 <br></br> Lördag 10.00 - 16.00
						</InfoText>
					</InfoContainer>
					<InfoContainer>
						<InfoHeader></InfoHeader>
						<InfoLink to='/buketter'>Buketter</InfoLink>
						<InfoLink to='/begravning'>Begravning</InfoLink>
						<InfoLink to='/brollop'>Bröllop</InfoLink>
						<InfoLink to='/kontakt'>Kontakt</InfoLink>
					</InfoContainer>
					<InfoContainer>
						<InfoHeader>{footer.companyInfo}</InfoHeader>
						<InfoLink to='/bestallningar'>Beställningar</InfoLink>
						<InfoLink to='/event'>Event</InfoLink>
					</InfoContainer>
					<InfoContainer>
						<InfoHeader>{footer.companyInfo}</InfoHeader>
						<InfoText>
							Strauss Blommor <br></br>
							Rosenlundsgatan 32 C <br></br>
							118 53 Stockholm
						</InfoText>
					</InfoContainer>
				</NavContainer>
				<Socials>
					<h2>{footer.companyInfo}</h2>
					<div>
						 <a href='/'><Img alt='hej' src='/media/facebook.png'></Img></a>
						 <a href='/'><Img alt='hej' src='/media/instagram.png'></Img></a>					</div>
				</Socials>
			</Container>
	
	)
}

export default Footer
