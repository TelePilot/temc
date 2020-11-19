import React from 'react'
import Sample from '../components/projects/sample.component'
import Header from '../components/header/header.component'
import Tagline from '../components/misc/tagline.component'
import TextBubble from '../components/misc/textbubble.component'
import Movie from '../components/misc/movie.component'
import { motion } from 'framer-motion'
import  VisibilitySensor  from 'react-visibility-sensor'
const Home = () => {
	return (
		<motion.div>
			<Header />

			<Tagline />
			<VisibilitySensor partialVisibility>
			{({ isVisible}) => {
				
				return(<Sample inView={{isVisible}} />)}}
			
			</VisibilitySensor>
			

			<TextBubble />
			<Movie />
		</motion.div>
	)
}

export default Home
