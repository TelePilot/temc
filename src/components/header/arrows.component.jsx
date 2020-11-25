import React from 'react'
import styled from 'styled-components'

const ArrowDown = styled.svg`
    position: absolute;
    top: 85vh;
    left: 50%;
    transition: 1s all ease-in-out;


    @keyframes ArrowDown{
    from {
    transform: translateY(10);
    }
    to {
    transform: translate(-10);
    }
}
`

const Arrow = () => {
    return (
        <>
         <ArrowDown width="30" height="17" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5858 16.4142C14.3668 17.1953 15.6332 17.1953 16.4142 16.4142L29.1421 3.68629C29.9232 2.90524 29.9232 1.63891 29.1421 0.857863C28.3611 0.0768147 27.0948 0.0768148 26.3137 0.857863L15 12.1716L3.68629 0.857865C2.90524 0.0768168 1.63891 0.0768169 0.857863 0.857866C0.0768148 1.63891 0.0768149 2.90524 0.857864 3.68629L13.5858 16.4142ZM13 14L13 15L17 15L17 14L13 14Z" fill="white" fill-opacity="0.4"/>
</ArrowDown>

        </>
    )
}

export default Arrow
