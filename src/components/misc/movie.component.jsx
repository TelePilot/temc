import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

`

const Video = styled.div`
	margin-bottom: 10vh;
	@media screen and (max-width: 700px) {
		width: 100%;
	}
`

const Movie = () => {
	return (
			<Container>
		<Video>
			<iframe width="1080" height="540" src="https://www.youtube.com/embed/bkBXiKwahMc?start=5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</Video>
	</Container>
	)
}

export default Movie
