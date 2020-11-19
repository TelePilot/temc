import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import imageUrlBuilder from '@sanity/image-url'
import { Link } from 'react-router-dom'

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	width: 90%;
	height: 100px;
	z-index: 9999;
	@media screen and (max-width: 700px) {
		transition: 0.8s all ease;
		font-size: 0;
		width: 50%;
	}
`

const LogoBox = styled.img`
	width: 200px;
	padding: 25px 50px;
	height: auto;
	@media screen and (max-width: 700px) {
		transition: 0.8s all ease;
		padding: 10px 25px;
	}
	@media screen and (max-width: 400px) {
		padding: 5px 0 10px 25px;
		width: 150px;
	}
`

const NavBox = styled.div`
	display: flex;
	justify-content: center;
	right: 0;
	padding: 30px 30px;
	gap: 12px;
	align-items: center;
	font-size: 16.4px;
	height: 22px;

	@media screen and (max-width: 800px) {
		width: 0;
	}
`

const MenuLink = styled(Link)`
	text-decoration: none;
	padding-top: 20px;
	z-index: 999;

	@media screen and (max-width: 800px) {
		opacity: none;
		visibility: hidden;
	}
`

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}

const NavigationDesktop = () => {
	const [header, setHeader] = useState('')

	useEffect(() => {
		const headerQuery = `*[_type == "header"]{
			menu, logo
		}`
		sanityClient.fetch(headerQuery).then(header => {
			header.forEach(header => {
				setHeader(header)
			})
		})

		return
	}, [])

	return (
		<Container id='navbar'>
			<Link to='#'>
				<LogoBox className='App-logo2' alt='TEMC Logo' src={urlFor(header.logo).url()} />
			</Link>
			<NavBox>
				{header.menu
					? header.menu.map((item, id) => (
							<MenuLink to={item.link} key={id}>
								{item.name}
							</MenuLink>
					  ))
					: null}
			</NavBox>
		</Container>
	)
}

export default NavigationDesktop
