import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import sanityClient from '../../Client'

const Container = styled.div`
	padding-top: 100px;
	height: auto;
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: space-around;
	text-align: center;
`

const NavContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	height: auto;

	@media screen and (max-width: 700px) {
		display: flex;
		flex-direction: column;
	}
`

const Socials = styled.div`
	display: flex;
	align-items: left;
	justify-content: left;
	text-align: left;
	flex-direction: column;
`

const Img = styled.img`
	height: 50px;
	width: 50px;
	padding: 2px;
`
const InfoContainer = styled.div`
	display: flex;
	flex-flow: column;
	height: auto;
`
const InfoHeader = styled.h4``
const InfoText = styled.p`
	top: 0;
	margin: 0;
	padding-bottom: 8px;
`
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
					<Socials>
						<InfoLink to='/buketter'>Buketter</InfoLink>
						<InfoLink to='/begravning'>Begravning</InfoLink>
						<InfoLink to='/brollop'>Bröllop</InfoLink>
						<InfoLink to='/kontakt'>Kontakt</InfoLink>
					</Socials>
				</InfoContainer>
				<InfoContainer>
					<InfoHeader>{footer.companyInfo}</InfoHeader>
					<InfoText>
						Måndag - fredag <br /> 10.00 - 18.30 <br></br> Lördag 10.00 - 16.00{' '}
						<br /> Söndag STÄNGT
					</InfoText>
				</InfoContainer>
				<InfoContainer>
					<InfoHeader>{footer.companyInfo}</InfoHeader>
					<InfoLink to='/bestallningar'>Beställningar</InfoLink>
					<InfoLink to='/event'>Event</InfoLink>
				</InfoContainer>
				<InfoContainer>
					<InfoHeader>{footer.companyInfo}</InfoHeader>
					<InfoText>
						Strauss Blommor <br />
						Rosenlundsgatan 32 C <br />
						118 53 Stockholm
					</InfoText>
				</InfoContainer>
				<InfoContainer>
					<Socials>
						<InfoHeader>{footer.companyInfo}</InfoHeader>
						<InfoText>
							<a href='/'>
								<Img alt='hej' src='/media/facebook.png'></Img>
							</a>
							<a href='/'>
								<Img alt='hej' src='/media/instagram.png'></Img>
							</a>
						</InfoText>
					</Socials>
				</InfoContainer>
			</NavContainer>
		</Container>
	)
}

export default Footer
