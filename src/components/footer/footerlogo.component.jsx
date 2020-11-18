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
`

const HeroImage = styled.img`
    height: 50px;
    width: auto;
    transition: 0.2s all ease;

    &:hover {
        height: 55px;
    }
`

const FooterLogo = () => {
	return (
		<Container>
            <HeroImage src='https://cdn.sanity.io/images/qpcg4kr6/production/e6dd7cfb1790d7d43e5b4d11c2e99bffebab2be9-427x99.svg?w=1000&h=1000&fit=max'/>
            <MenuLink>© Copyright TEMC 2020</MenuLink>
        </Container>
	)
}

export default FooterLogo
