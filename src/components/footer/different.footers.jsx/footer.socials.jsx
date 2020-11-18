import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../../../Client'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}

const HeroImage = styled.img`
    width: 50px;
    height: 50px;
`

const Footersocials = () => {

    const [footer, setFooter] = useState('')

    useEffect(() => {
      const footerQuery = `*[_type == "footer"]{
        info
      }`
      sanityClient.fetch(footerQuery).then(footer => {
        footer.forEach(footer => {
          setFooter(footer)
        })
      })
    
      return
    }, [])

    return (
        <>
            			<HeroImage
							alt='hero image'
							className='heroimage'
							id='heroimage'
							src={urlFor(footer.socialMedia).url()}
						/>
						<HeroImage
							alt='hero image'
							className='heroimage'
							id='heroimage'
							src={urlFor(footer.socialMedia).url()}
						/>
        </>
    )
}

export default Footersocials
