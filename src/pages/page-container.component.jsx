import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { match } from 'react-router-dom'

const Container = styled.div`
	min-height: 150vh;
	box-sizing: border-box;
	padding: 0 50px;

	@media screen and (max-width: 968px) {
		padding: 0 5px;
	}
	@media screen and (max-width: 700px) {
		padding: 0;
	}
`

const PageContainer = props => {
	const [color, setColor] = useState(false)
	let id = window.location.pathname
	console.log(id)
	useEffect(() => {
		id === '/kontakt' ? setColor(true) : setColor(false)
	}, [id])
	return <Container>{props.children}</Container>
}

export default PageContainer
