import React from 'react'
import Sample from '../components/sample.component'
import Projects from '../pages/projects.component'
import Header from '../components/header.component'
import Tagline from '../components/tagline.component'
import TextBubble from '../components/textbubble.component'
import Movie from '../components/movie.component'

const Home = () => {
	return (
		<div>
			<Header />

			<Tagline />

			<Sample />
			<Projects />

			<TextBubble />
			<Movie />
		</div>
	)
}

export default Home
