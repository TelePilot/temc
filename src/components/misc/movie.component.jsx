import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

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

const Movie = ({ inView }) => {
	return (
		<Container>
			<Video>
				<ReactPlayer
					playing={inView ? true : false}
					url='https://player.vimeo.com/video/485527634'
					muted='true'
				></ReactPlayer>
			</Video>
		</Container>
	)
}

export default Movie
