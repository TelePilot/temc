import React from 'react'
import styled from 'styled-components'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../Client'

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
const ColoredBoxBlue = styled.div`
	position: relative;
	width: 160px;
	top: 62px;
	height: 23px;
	background: rgba(64, 109, 245, 0.63);
	margin: 0 auto;
	z-index: -1;
`
const Header = styled.h2``


const Grid = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-column: repeat(auto-fill, minmax(300px, 1fr))
    gap: 10px;
`

const Dettakanvi = () => {
	return (
		<div><ColoredBoxBlue /><Header>Detta kan vi</Header>
		<Container>
            
		</Container>
        </div>
	)
}

export default Dettakanvi
