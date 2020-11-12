import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import imageUrlBuilder from '@sanity/image-url'
import { gsap } from 'gsap'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}

const Container = styled.div`
background: black;
position: fixed;
top: 0;
left: 0;
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
z-index: 5;
`

const IntroLogo = styled.img`
position: absolute;
margin: 3rem;
top: 0;
right: 0;
height: 100px;
width: 100px;
`

const IntroText = styled.div`
font-size: 3rem;
color: blanchedalmond;

@media screen and (max-width: 1200px) {
    font-size: 2.4rem;
    margin: 2.5rem;
}
@media screen and (max-width: 800px) {
    font-size: 1.8rem;
    margin: 2rem;
}
@media screen and (max-width: 500px) {
    font-size: 1.3rem;
    margin: 1.7rem;
}
`

const Text = styled.h1`
transform: translateY(200%);
display: inline-block;
`

const HideText = styled.div`

background: black;
overflow: hidden;
`

const Blur = styled.div`
    background: #201B3D;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 3;
    transform: translateY(-150%);
`

const Button = styled.button`
    font-weight: 100;
    color: black;
    font-size: 1rem;
    width: 40%;
    display: flex;
    justify-content: center;
    margin: 3rem 0;
    border-radius: 2rem;
    background: black;
    outline: none;
    color: white;
    cursor: pointer;
    padding: 1rem 0.5rem;
    animation: animate 2s linear infinite;

    @keyframes animate {
        10%{
            box-shadow: 0 0 0 0 #fbfcfd;
        }
        45%{
            box-shadow: 0 0 0 0 #fbfcfd, 0 0 4px 0 #fbfcfd;
        }
        75%{
            box-shadow: 0 0 0 0 #fbfcfd, 0 0 8px 0 #fbfcfd;
        }
        100%{
            box-shadow: 0 0 0 #fbfcfd;
        }
    }
    
`

const IntroHomePage = () => {
	           const logo = useRef(null)
    const introAnimation1 = useRef(null)
    const introAnimation2 = useRef(null)
    const introAnimation3 = useRef(null)
    const introAnimation4 = useRef(null)
    const introPage = useRef(null)
    const introSlider = useRef(null)
    const [play, setPlay] = useState(false)

    useEffect(() => {
        gsap.to(introAnimation1.current, {
            duration: 1, 
            y:'0%'
        })
    }, [introAnimation1])

    useEffect(() => {
        gsap.to(introAnimation2.current, {
            duration: 1, 
            y:'0%',
            delay: 1
        })
    }, [introAnimation2])

    useEffect(() => {
        gsap.to(introAnimation3.current, {
            duration: 1, 
            y:'0%',
            delay: 2
        })
    }, [introAnimation3])

    useEffect(() => {
        gsap.from(introAnimation4.current, {
            duration: 4, 
            autoAlpha: 0,
            ease: 'none',
            delay: 4,
        })
    }, [introAnimation4])

    useEffect(() => {
        gsap.to(introPage.current, {
            y: '120%',
            ease: 'power1.out',
            duration: 1,
            delay: 6
        })
    }, [])

    useEffect(() => {
        gsap.to(introSlider.current, {
            y: '220%',
            ease: 'none',
            duration: 0.5,
            delay: 6.5
        })
    }, [])

    useEffect(() => {
        gsap.to(logo.current, {
            y: '200%',
            ease: 'none',
            duration: 0.5,
            delay: 6.5
        })
    }, [])


const tl = gsap.timeline({paused: false})
    
// useMemo(() => gsap.to({paused: true}), []);
    // play this onClick
    useEffect(() => {
        // if this happends
        if (play) {
            // 
        tl.play()
        }
    })

    const [header, setHeader] = useState('')

	useEffect(() => {
		const headerQuery = `*[_type == "header"]`
		sanityClient.fetch(headerQuery).then(header => {
			header.forEach(header => {
				setHeader(header)
			})
		})
		return
	}, [])


    return (
        <Container ref={introPage}>
            <IntroLogo alt='TEMC Logo' src={urlFor(header.logo).url()} />
            <IntroText>
                <HideText>
                <Text ref={introAnimation1}>Crisp design</Text>
                </HideText>
                <HideText>
                <Text ref={introAnimation2}>Excellent service</Text>
                </HideText>
                <HideText>
                <Text ref={introAnimation3}>pretty cheap.</Text>
                </HideText>
            <Button href={introAnimation4} onClick={() => setPlay(!play)}>
            Enter </Button>
            </IntroText>
<Blur ref={introSlider}></Blur>
        </Container>
    )
}

export default IntroHomePage


