import React from 'react'
import Sample from '../components/projects/sample.component'
import Header from '../components/header/header.component'
import Movie from '../components/misc/movie.component'
import { motion } from 'framer-motion'
import ScrollDetect from '../components/scroll-detect.component'
import TextBubbleLeft from '../components/misc/textbubbleleft'
import Priskategori from '../components/misc/Priskategori.component'
const Home = () => {
	return (
		<motion.div>
			<Header />
			<Priskategori />
			<ScrollDetect>
				<Sample />
			</ScrollDetect>
			<TextBubbleLeft />
			<Movie />
		</motion.div>
	)
}

export default Home
