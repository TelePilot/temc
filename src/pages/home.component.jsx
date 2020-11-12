import React from 'react'
import Sample from '../components/projects/sample.component'
import Header from '../components/header/header.component'
import Tagline from '../components/misc/tagline.component'
import TextBubble from '../components/misc/textbubble.component'
import Movie from '../components/misc/movie.component'
import IntroHomePage from '../components/header/introHomepage'

const Home = () => {
	return (
		<div>
			<Header />

			<Tagline />

			<Sample />

			<TextBubble />
			<Movie />
			<IntroHomePage />
		</div>
	)
}

export default Home
