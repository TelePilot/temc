import React from 'react'
import Sample from '../components/projects/sample.component'
import Header from '../components/header/header.component'
import Tagline from '../components/misc/tagline.component'
import TextBubble from '../components/misc/textbubble.component'
import Movie from '../components/misc/movie.component'
import { motion } from 'framer-motion'

const Home = () => {
	return (
		<motion.div>
			<Header />

			<Tagline />

			<Sample />

			<TextBubble />
			<Movie />
		</motion.div>
	)
}

export default Home
