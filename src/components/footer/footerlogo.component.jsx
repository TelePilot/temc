import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import sanityClient from '../../Client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}

const MenuLink = styled(Link)`
text-decoration: none;
`

const Container = styled.div`
    width: 100%;
    height: 220px;
    padding: 0;
    margin: 0;
	background-color: #686868;
    display: flex;
    flex-direction: column;
	justify-content: center;
    text-align: center;
    gap: 50px;
    @media screen and (max-width: 500px) {
    height: 320px;
    }
`

const HeroImage = styled.img`
    height: 30px;
    transition: 0.2s all ease;

    &:hover {
        height: 55px;
    }
`

const A = styled.a`
    transition: 2s all ease;
`

const FooterLogo = () => {

	const [header, setHeader] = useState('')

	useEffect(() => {
		const headerQuery = `*[_type == "header"]{
			logo
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
            <A href='#'><HeroImage className='App-logo' alt='TEMC Logo' src={urlFor(header.logo).url()} /></A>

            <MenuLink>© Copyright TEMC 2020</MenuLink>
            <br />
        </Container>
	)
}

export default FooterLogo
