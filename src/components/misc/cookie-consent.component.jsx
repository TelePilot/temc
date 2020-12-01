import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 150px;
    height: 135px;
    position: sticky;
    bottom: 0;
    left: 100vw;
`

const X = styled.img`
    width: 30px;
    height: 30px;
    position: absolute;
    right: 0;
    bottom: 15px;
    padding: 30px 120px 20px 50px;
    margin: 0 50px 0 0%;
    z-index: 9;
    cursor: default;

    @media screen and (max-width:700px) {
        padding: 030px;
        margin: 0;
        bottom: 50px;
        width: 40px;
        height: 50px;
    }
`

const Cookie = styled.div`
    position: absolute;
    bottom: 154px;
    right: 26px;
    animation: cookie-floating 0.8s none infinite alternate-reverse;
    @keyframes cookie-floating {
        from{
            bottom: 145px; 
        }
        to{
            bottom: 150px;
        }
    }
` 

const Img = styled.img`
    cursor: pointer;
`

const Hand = styled.div`
    width: 210px;
    position: absolute;
    bottom: 0;
    transform: scaleX(-1);
    z-index: 2;
`

const SVG = styled.svg`
    width: 210px;
    position: absolute;
    bottom: 0;
    transform: scaleX(-1);
    z-index: 1;
`



const CookieConsent = () => {
    return (
         <Container>
            <Hand>
                <Img src='https://abcdinamo.com/pdf-assets/Dinamo_Accept_Cookies_Hand.png'></Img>
            </Hand>
         <Cookie>
                <Img src="https://abcdinamo.com/pdf-assets/Dinamo_Accept_Cookies_Cookie.png" alt="Mago accept cookies cookie"></Img>
         </Cookie>
         
         <X src='/media/cross.png'/>
        </Container>   
    )
}

export default CookieConsent
