import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import sanityClient from '../Client'
import imageUrlBuilder from '@sanity/image-url'
import { gsap } from 'gsap'

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100px;
`

const LogoBox = styled.img`
	width: 100px;
	padding: 25px;
	height: auto;
`

const NavBox = styled.div`
	display: flex;
	right: 0;
	padding: 25px;
	gap: 15px;
`

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}

const Navigation = () => {
	const menu = document.querySelector(NavBox)
	const logo = document.querySelector(LogoBox)

	gsap.fromTo(menu, {
		opacity: 0,
	},
	{
		opacity: 1,
		duration: 1,
		ease: 'Power1.out',
		delay: 1
	}
	)

	gsap.fromTo(logo, {
		opacity: 0,
	},{
		opacity: 1,
		duration: 1,
		ease: 'Power1.out',
		delay: 1	}
	)

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
		<Container>
			<LogoBox alt='TEMC Logo' src={urlFor(header.logo).url()} />
			<NavBox>
				{header.menu
					? header.menu.map((item, id) => <p key={id}>{item.name}</p>)
					: null}
			</NavBox>
		</Container>
	)
}

export default Navigation
