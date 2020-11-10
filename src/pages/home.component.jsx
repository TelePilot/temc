import React from 'react'
import Sample from '../components/sample.component'
import Header from '../components/header.component'
import Tagline from '../components/tagline.component'
import TextBubble from '../components/textbubble.component'
import Movie from '../components/movie.component'
import Dettakanvi from '../components/dettakanvi.component'

const Home = () => {
	return (
		<div>
			<Header />

			<Tagline />

			<Sample />

			<TextBubble />
			<Movie />
			<Dettakanvi />
		</div>
	)
}

export default Home
