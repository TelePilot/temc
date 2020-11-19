import React, { useState, createContext } from 'react'

export const ImageSizeContext = createContext()
const ImageSizeProvider = props => {
	const [pos, setPos] = useState({
		image: {
			position: {
			x: '',
			y: '',
		},
		width: '560px;',
		imageUrl: '',
		},
		header: {
			position: {
			x: '',
			y: '',
		}
		},
		text: {
			position: {
			x: '',
			y: '',
		}
		}
		
	})
	console.log(pos)
	return (
		<ImageSizeContext.Provider value={{ pos, setPos }}>
			{props.children}
		</ImageSizeContext.Provider>
	)
}

export default ImageSizeProvider
