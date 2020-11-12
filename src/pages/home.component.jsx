import React from 'react'
import Sample from '../components/projects/sample.component'
import Header from '../components/header/header.component'
import Tagline from '../components/misc/tagline.component'
import TextBubble from '../components/misc/textbubble.component'
import Movie from '../components/misc/movie.component'
import { motion } from 'framer-motion'

const transition = { duration: 0.6, ease: [0.43, 0.013, 0.23, 0.96] }
const Home = () => {
	return (
		<motion.div
			exit={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			transition={transition}
		>
			<Header />

			<Tagline />

			<Sample />

			<TextBubble />
			<Movie />
		</motion.div>
	)
}

export default Home
