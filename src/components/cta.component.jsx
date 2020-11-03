import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #d5599e;
	border-radius: 10px;
	border: none;
`
const Text = styled.p`
	color: white;
`
const Icon = styled.img``
const CTA = () => {
	return (
		<Button>
			<Text>Kontakta Oss</Text>
			<Icon src='' />
		</Button>
	)
}

export default CTA
