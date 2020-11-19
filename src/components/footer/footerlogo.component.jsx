import React from 'react'
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
    height: 50px;
    width: auto;
    transition: 0.2s all ease;

    &:hover {
        height: 55px;
    }
`

const A = styled.a`
    transition: 2s all ease;
`

const FooterLogo = () => {
	return (
		<Container>
            <A href='#'><HeroImage className='App-logo' src='https://cdn.sanity.io/images/qpcg4kr6/production/e6dd7cfb1790d7d43e5b4d11c2e99bffebab2be9-427x99.svg?w=1000&h=1000&fit=max'/></A>
            <MenuLink>© Copyright TEMC 2020</MenuLink>
            <br />
        </Container>
	)
}

export default FooterLogo
