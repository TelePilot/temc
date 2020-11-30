import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const Iframe = styled(ReactPlayer)`
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
				<Iframe
					playing={inView ? true : false}
					url='https://player.vimeo.com/video/485527634'
					muted='true'
				></Iframe>
			</Video>
		</Container>
	)
}

export default Movie
