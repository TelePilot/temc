import React, { useState, useEffect, createContext } from 'react'
import sanityClient from '../Client'

export const FooterContext = createContext()

const FooterContextProvider = props => {
	const [footer, setFooter] = useState('')
	useEffect(() => {
		const footerQuery = `*[_type == "footer"]
       `
		sanityClient.fetch(footerQuery).then(footer => {
			footer.forEach(footer => {
				setFooter(footer)
			})
		})
		return
	}, [])
	return (
		<FooterContext.Provider value={{ footer }}>
			{props.children}
		</FooterContext.Provider>
	)
}

export default FooterContextProvider
