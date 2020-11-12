import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'

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
`
const FooterMiddle = styled.div`

`
const Placeholder = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: rgba(64, 109, 245, 0.63);
border-radius: 12px 7px;
border: none;
width: 160px;
max-height: 60px;
margin: 0 30px;
cursor: pointer;

@media screen and (max-width: 700px) {
position: fixed;
top: 90vh;
left: 15%;
width: 60%;
height: 5vh;
background: rgba(64, 109, 245, 1);
box-shadow: 0 5px 2px rgba(40, 40, 255, .2);
}
@media screen and (max-width: 400px) {
	left: 0;
	width: 80%;
	}
`

const FooterTextRight = styled.p`
	color: white;
	font-size: 16px;
	text-align: right;
	width: 450px;
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
			<FooterMiddle><Placeholder /></FooterMiddle>
			<FooterTextRight>{footer.companyInfo}</FooterTextRight>
		</Container>
	)
}

export default Footer
