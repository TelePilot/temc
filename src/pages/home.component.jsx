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
import Tagline from '../components/misc/tagline.component'
const transition = { duration: 0.3, ease: [0.43, 0.013, 0.23, 0.96] }
const Home = () => {
	return (
		<motion.div
			exit={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			transition={transition}
		>
			<Header />
			<Arrow />
			<Tagline />
			<Priskategori />
			<TextBubbleLeft />
			<ScrollDetect>
				<Movie />
			</ScrollDetect>
			<ScrollDetect>
				<Sample />
			</ScrollDetect>

			<IconDisplayer />
		</motion.div>
	)
}

export default Home
