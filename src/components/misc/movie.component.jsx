import React from 'react'
import styled from 'styled-components'

const Video = styled.video`
	width: 60%;
	height: auto;
	margin-bottom: 10vh;
	@media screen and (max-width: 700px) {
		width: 100%;
	}
`

const Movie = () => {
	return (
		<div>
			<Video controls>
				<source src='/media/SanityMovie.mp4' type='video/mp4' />
			</Video>
		</div>
	)
}

export default Movie
