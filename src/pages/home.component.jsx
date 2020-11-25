import React from 'react'
import Sample from '../components/projects/sample.component'
import Header from '../components/header/header.component'
import Movie from '../components/misc/movie.component'
import { motion } from 'framer-motion'
import ScrollDetect from '../components/scroll-detect.component'
import TextBubbleLeft from '../components/misc/textbubbleleft'
import Priskategori from '../components/misc/Priskategori.component'
import IconDisplayer from '../components/misc/icon-display.component'
import Arrow from '../components/header/arrows.component'
const Home = () => {
	return (
		<motion.div>
			<Header />
			<Arrow />
			<Priskategori />
			<ScrollDetect>
				<Sample />
			</ScrollDetect>
			<TextBubbleLeft />
			<Movie />
			<IconDisplayer />
		</motion.div>
	)
}

export default Home
