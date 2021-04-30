import React, { useState, useEffect, createContext } from 'react'
import sanityClient from '../Client'

export const KategoriContext = createContext()

const KategoriContextProvider = props => {
	const [kategori, setKategori] = useState('')
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		const kategoriQuery = `*[_type == "priskategori"]`
		sanityClient.fetch(kategoriQuery).then(kategori => {
			const kategoriArray = []
			kategori.forEach(kategori => {
				kategoriArray.push(kategori)
			})
			setKategori(kategoriArray)
			setLoaded(true)
		})
		return
	}, [])
	return (
		<KategoriContext.Provider value={{ kategori }}>
			{loaded ? props.children : null}
		</KategoriContext.Provider>
	)
}

export default KategoriContextProvider
