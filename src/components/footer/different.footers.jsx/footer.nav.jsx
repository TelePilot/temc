import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import sanityClient from '../../../Client'

const MenuLink = styled(Link)`
	text-decoration: none;
	padding-top: 20px;

	@media screen and (max-width: 800px) {
		opacity: none;
		visibility: hidden;
	}

	&.active {
		
	}
`

const FooterNav = () => {
    
    const [footer, setFooter] = useState('')

    useEffect(() => {
      const footerQuery = `*[_type == "footer"]{
        menu
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
    {footer.companyLocation
    ? footer.companyLocation.map((item, id) => (
    <MenuLink to={item.link} key={id}>
        {footer.companyLocation}
    </MenuLink>
    ))
    : null}
        </>
    )
}

export default FooterNav
