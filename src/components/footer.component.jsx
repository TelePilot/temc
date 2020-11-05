import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import sanityClient from '../Client'

const Container = styled.div`
	height: 200px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	text-align: center;
`
const FooterTextLeft = styled.p`
	color: white;
	font-size: 16px;
	text-align: left;
	width: 450px;
	border: 2px solid white;
`

const FooterTextRight = styled.p`
	color: white;
	font-size: 16px;
	text-align: left;
	width: 450px;
	border: 2px solid white;
`

const Footer = () => {
	const [footer, setFooter] = useState('')

	useEffect(() => {
		const footerQuery = `*[_type == "footer"]`
		sanityClient.fetch(footerQuery).then(footer => {
			footer.forEach(footer => {
				setFooter(footer)
			})
		})
		return
	}, [])
	return (
		<Container>
			<FooterTextLeft>{footer.companyInfo}</FooterTextLeft>
			<FooterTextRight>{footer.companyInfo}</FooterTextRight>
		</Container>
	)
}

export default Footer
