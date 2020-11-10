import React from 'react'
import styled from 'styled-components'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../Client'
import HeaderText from './header-text.component'
const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 400px;
	margin-top: 10vh;
`
const Grid = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-column: repeat(auto-fill, minmax(300px, 1fr))
    gap: 10px;
`

const Dettakanvi = () => {
	return (
		<div>
			<HeaderText text='Detta kan vi' />
			<Container></Container>
		</div>
	)
}

export default Dettakanvi
