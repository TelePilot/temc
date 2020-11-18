import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import sanityClient from '../../../Client'


const MenuLink = styled(Link)`
	text-decoration: none;
	padding-top: 20px;
`

const Title = styled.h2`

`

const FooterInfo = () => {
    
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
        <Title>{console.log(footer)}</Title>
    {footer.companyLocation
    ? footer.companyLocation.map((item, id) => (
    <MenuLink to={item.link} key={id}>
        {item.name}
    </MenuLink>
    ))
    : null}
        </>
    )
}

export default FooterInfo
