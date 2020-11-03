import React, { useState, useEffect, createContext } from 'react'
import sanityClient from '../Client'

export const TaglineContext = createContext()

const TaglineContextProvider = props => {
	const [tagline, setTagline] = useState('')
	useEffect(() => {
		const taglineQuery = `*[_type == "tagline"]
       `
		sanityClient.fetch(taglineQuery).then(tagline => {
			tagline.forEach(tagline => {
				setTagline(tagline)
			})
		})
		return
	}, [])
	return (
		<TaglineContext.Provider value={{ tagline }}>
			{props.children}
		</TaglineContext.Provider>
	)
}

export default TaglineContextProvider
