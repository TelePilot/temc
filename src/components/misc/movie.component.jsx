import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

`

const Iframe = styled.iframe`
	width: 626px;
	height: 354px;
	
	@media screen and (max-width: 700px) {
		width: 100vw;
		height: auto;
	}
`

const Video = styled.div`
	margin-bottom: 10vh;
`

const Movie = () => {
	return (
			<Container>
		<Video>
		<Iframe src="https://player.vimeo.com/video/481477493" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></Iframe>		</Video>
	</Container>
	)
}

export default Movie
