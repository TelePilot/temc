import React, { useContext } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { KategoriContext } from "../../store/kategori.context"
import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "../../Client"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  @media screen and (max-width: 800px) {
  }
`

const PrisWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex: flex-wrap;
  align-items: flex-start;
  box-sizing: border-box;
  gap: 15px;

  @media screen and (max-width: 922px) {
    flex-direction: column;
  }
`
const Icon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: -10px;
`

const Card = styled.div`
  background: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  max-height: 100%;
  padding: 30px;
  min-width: 220px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.4);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

const CardColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 9px;
  width: 100%;
  border-radius: 10px 10px 0 0;
`

const HeaderText = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 700px) {
    font-size: 7vw;
  }
`

const Title = styled.h2`
  font-size: 1.1rem;
  color: black;
`

// const TextCont = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// `

const Text = styled.p`
  font-size: 1rem;
  margin: 3px 0;
  text-align: left;
  color: black;
`

const MiniTitle = styled.p`
  display: inline;
  font-size: 0.9rem;
  font-weight: 500;
  margin: 3px 0;
  text-align: center;
  color: black;

  &::after {
    z-index: -1;
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: rgba(64, 109, 245, 0.63);
  }
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 2em;
  border: none;
  width: 100%;
  height: 100%;
  margin: 30px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 400px) {
    left: 0;
    width: 80%;
  }

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

const PricesContainer = styled.div`
  display: flex;
  padding-top: 20px;
`
const Prices = styled.div`
  margin-top: auto;
  text-align: center;
  font-size: 32px;
  line-height: 40px;
  font-weight: 500;
  color: #4e4852;
  font-family: "Open Sans", sans-serif;
`

const MOMS = styled.div`
  font-size: 12px;
  font-style: italic;
  color: #4e4852;
`
const KR = styled.div`
  font-size: 12px;
  font-style: italic;
  color: #4e4852;
  padding-top: 17px;
  padding-left: 2px;
`

const ButtonTitle = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  color: white;
  margin: 15px 0;
`
const TextCont = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;
`

const Priskategori = () => {
  const { kategori } = useContext(KategoriContext)

  return (
    <Container id="container">
      <HeaderText>Tre olika paket</HeaderText>
      <PrisWrapper>
        {kategori.map((item, idx) => {
          let color = ""
          if (idx === 0) {
            color = "#ffd840"
          } else if (idx === 1) {
            color = "#4bd8a8"
          } else {
            color = "#237cca"
          }
          return (
            <Card key={idx}>
              <CardColor style={{ background: color }} />
              <Title>{item.title}</Title>
              <Icon src={urlFor(item.icon).url()}></Icon>
              {/* <MiniTitle>{item.tagline}</MiniTitle> */}
              <TextCont>
                {item.kategorier.map((item, idx) => {
                  return (
                    <Text>
                      {item.active ? (
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 6L9 17L4 12"
                            stroke="#00ba0f"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 -3 20 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="7.5"
                            cy="7.5"
                            r="6.5"
                            stroke="#C4C4C4"
                            stroke-width="2"
                          />
                          <path
                            d="M1.91504 3.75L12.79 11.625"
                            stroke="#C4C4C4"
                            stroke-width="2"
                          />
                        </svg>
                      )}
                      {item.name}
                    </Text>
                  )
                })}
              </TextCont>
              <PricesContainer>
                <Prices>{item.price}</Prices>
                <KR>{item.valuta}</KR>
              </PricesContainer>
              <MOMS>EX. MOMS</MOMS>
              <Button style={{ background: color }}>
                <ButtonTitle to="/kontakt">Beställ här</ButtonTitle>
              </Button>
            </Card>
          )
        })}
      </PrisWrapper>
    </Container>
  )
}

export default Priskategori
