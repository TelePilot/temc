import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import sanityClient from '../../Client'
import imageUrlBuilder from '@sanity/image-url'
import Footersocials from './different.footers.jsx/footer.socials'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}

const MenuLink = styled(Link)`
text-decoration: none;
`

const Container = styled.div`
	padding-top: 15vh;
	height: auto;
	width: 90%;
	height: 100px;
	padding: 0 50px;
	display: flex;
	justify-content: space-around;
	text-align: center;

	@media screen and (max-width: 700px) {
		margin-bottom: 60px;
	}
`

const NavContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	height: auto;

	@media screen and (max-width: 700px) {
		display: flex;
		flex-direction: column;
		margin-bottom: 60px;
	}
`

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
`
const LastInfoContainer = styled.div`
	display: flex;
	flex-flow: column;
	height: auto;
	margin-bottom: 8em;
`
const Image = styled.img`
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

const HeroImage = styled.img`
	width: auto;
	height: 80%;
	z-index: -1;

	@media screen and (max-width: 500px) {
		height: 73%;
	}
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
				<InfoHeader>navigation</InfoHeader>

				{footer.menu
					? footer.menu.map((item, id) => (
							<InfoLink to={item.link} key={id}>
								{item.name}
							</InfoLink>
					  ))
					: null}
</InfoContainer>
<InfoContainer>
<InfoHeader>Hitta hit!</InfoHeader>
				{footer.companyLocation
    ? footer.companyLocation.map((item, id) => (
    <MenuLink to={item.link} key={id}>
		{item.mail} <br />
		{item.postnr + ' '}
		{item.stad}
    </MenuLink>
    ))
    : null}				
	</InfoContainer>
	<InfoContainer>
	<InfoHeader>Öppettider</InfoHeader>
				{footer.companyOpenhours
    ? footer.companyOpenhours.map((item, id) => (
    <MenuLink to={item.link} key={id}>
		{item.vardagar}
		{item.helger}
    </MenuLink>
    ))
    : null}				
	</InfoContainer>
				<LastInfoContainer>
					<InfoText>
					<InfoHeader>Socials</InfoHeader>
					{footer.socialMedia
    ? footer.socialMedia.map((item, id) => (
    <MenuLink to={item.link} key={id}>
			<Image
			id='image'
			alt='client Image'
			src={item}/>
	</MenuLink>
    ))
    : null}				
			</InfoText>
		</LastInfoContainer>
	</NavContainer>
</Container>
	)
}

export default Footer
