import React from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: auto;
`
const RightContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 50px 150px;
    text-align: center;
    bottom: 0;
    right: 0;
`

const LeftContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 50px 150px;
    left: 0;
`

const SVG = styled.svg`
    padding: 15px;
`

const Text = styled.h4`
    font-size: 25px;
    margin: 0;
    padding-top: 80px;
    display: flex;
`
const Text1 = styled.h4`
    font-size: 25px;
    top: 0;
    margin: 0;
`

const TextBubble = () => {

    const animation = document.querySelector('.Text')
    const animation2 = document.querySelector('.Text1')

	gsap.fromTo(animation, {
		opacity: 0,
		x: 100
	},
	{
		opacity: 1,
		duration: 0.7,
		ease: 'Power1.out',
		delay: 0.7,
		x: 0
	}
	)

	gsap.fromTo(animation2, {
		opacity: 0,
	},{
		opacity: 1,
		duration: 1,
		ease: 'Power1.out',
		delay: 1	}
	)
    return (
        <Container>
        <RightContainer className='Text'>
            <SVG width="117" height="88" viewBox="0 0 117 88" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M98.531 78.0354C100.721 78.3287 102.258 80.3414 101.965 82.531C101.671 84.7206 99.6585 86.2579 97.4689 85.9646L98.531 78.0354ZM20.8926 5.36593C21.7934 3.3488 24.1589 2.44385 26.176 3.34467L59.0471 18.0244C61.0642 18.9252 61.9692 21.2907 61.0683 23.3078C60.1675 25.3249 57.8021 26.2299 55.7849 25.3291L26.5662 12.2804L13.5176 41.4991C12.6168 43.5163 10.2513 44.4212 8.23417 43.5204C6.21704 42.6196 5.31209 40.2541 6.21291 38.237L20.8926 5.36593ZM97.1439 81.8853L96.6129 85.8499L97.1439 81.8853ZM96.861 81.8243L95.7105 85.6553L96.861 81.8243ZM96.861 81.8243L95.7105 85.6553L96.861 81.8243ZM25.3486 20.2924L20.809 8.42626L28.2809 5.56776L32.8205 17.4339L25.3486 20.2924ZM97.4689 85.9646L96.6129 85.8499L97.675 77.9207L98.531 78.0354L97.4689 85.9646ZM96.6129 85.8499C96.3074 85.809 96.0057 85.7439 95.7105 85.6553L98.0116 77.9933C97.9015 77.9603 97.7889 77.936 97.675 77.9207L96.6129 85.8499ZM32.8205 17.4339C43.991 46.6328 68.0701 69.0011 98.0116 77.9933L95.7105 85.6553C63.3941 75.9498 37.4051 51.8073 25.3486 20.2924L32.8205 17.4339Z" fill="#FFEBEB"/>
</SVG>
        <Text>Hela den här komponenten</Text>
    </RightContainer>
    <LeftContainer className='Text1'>
        <Text1>Redigerar du i ett enkelt program</Text1>
        <SVG width="117" height="87" viewBox="0 0 117 87" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.201 9.08642C16.0114 8.79314 14.4742 6.78038 14.7675 4.59079C15.0607 2.40121 17.0735 0.863952 19.2631 1.15723L18.201 9.08642ZM95.8394 81.7559C94.9386 83.773 92.5731 84.678 90.556 83.7772L57.6849 69.0975C55.6678 68.1966 54.7629 65.8312 55.6637 63.814C56.5645 61.7969 58.93 60.892 60.9471 61.7928L90.1658 74.8414L103.214 45.6227C104.115 43.6056 106.481 42.7006 108.498 43.6014C110.515 44.5022 111.42 46.8677 110.519 48.8848L95.8394 81.7559ZM19.5881 5.23649L20.1191 1.27189L19.5881 5.23649ZM19.871 5.29752L21.0216 1.46656L19.871 5.29752ZM19.871 5.29752L21.0216 1.46656L19.871 5.29752ZM91.3834 66.8294L95.923 78.6956L88.4511 81.5541L83.9115 69.6879L91.3834 66.8294ZM19.2631 1.15723L20.1191 1.27189L19.057 9.20108L18.201 9.08642L19.2631 1.15723ZM20.1191 1.27189C20.4246 1.31281 20.7264 1.3779 21.0216 1.46656L18.7205 9.12848C18.8306 9.16154 18.9431 9.18582 19.057 9.20108L20.1191 1.27189ZM83.9115 69.6879C72.741 40.4891 48.662 18.1207 18.7205 9.12848L21.0216 1.46656C53.3379 11.1721 79.3269 35.3146 91.3834 66.8294L83.9115 69.6879Z" fill="#FFEBEB"/>
</SVG>

    </LeftContainer>
        </Container>
    )
}

export default TextBubble
