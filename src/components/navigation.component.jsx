import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import sanityClient from '../Client'
import imageUrlBuilder from '@sanity/image-url'

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
	height: auto;
`

const NavBox = styled.div``

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}

const Navigation = () => {
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
