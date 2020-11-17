import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import sanityClient from '../../Client'
import FooterInfo from './different.footers.jsx/footer.info'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}

const Container = styled.div`
	padding-top: 100px;
	height: auto;
	width: 100%;
	height: 100px;
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
const LastInfoContainer = styled.div`
	display: flex;
	flex-flow: column;
	height: auto;
	margin-bottom: 8em;
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
			{footer.menu
					? footer.menu.map((item, id) => (
							<InfoLink to={item.link} key={id}>
								{item.name}
							</InfoLink>
					  ))
					: null}
				<InfoContainer>
					<InfoHeader>{footer.companyInfo}</InfoHeader>
				</InfoContainer>
				<InfoContainer>
					<InfoHeader>{footer.companyInfo}</InfoHeader>
					<InfoText>
						Måndag - fredag <br /> 10.00 - 18.30 <br></br> Lördag 10.00 - 16.00{' '}
						<br /> Söndag STÄNGT
					</InfoText>
				</InfoContainer>
				<InfoContainer>
					<FooterInfo />
				</InfoContainer>
				<InfoContainer>
					<InfoHeader>{footer.companyInfo}</InfoHeader>
					<InfoText>
						Strauss Blommor <br />
						Rosenlundsgatan 32 C <br />
						118 53 Stockholm
					</InfoText>
				</InfoContainer>
				<LastInfoContainer>
						<InfoHeader>{footer.companyInfo}</InfoHeader>
						<InfoText>
						<HeroImage
					alt='hero image'
					className='heroimage'
					id='heroimage'
					src={urlFor(footer.socialMedia).url()}
				/>
						<HeroImage
					alt='hero image'
					className='heroimage'
					id='heroimage'
					src={urlFor(footer.socialMedia).url()}
				/>
						</InfoText>
				</LastInfoContainer>
			</NavContainer>
		</Container>
	)
}

export default Footer
