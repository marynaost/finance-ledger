import styled from 'styled-components'
import showcase from 'images/home/showcase.jpg'
import showcase2x from 'images/home/showcase@2x.jpg'
import Container from 'components/Container/Container'
import Button from 'components/Button/Button'
export default function Hero() {
  return (
    <Section id="home">
      <Container>
        <Title>The Sky Is The Limit</Title>
        <SubTitle>We provide world class financial assistance</SubTitle>
        <Button type="button" hero>
          Read More
        </Button>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  text-align: center;
  padding-top: 160px;
  padding-bottom: 104px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url(${showcase});

  @media (min-device-pixel-ratio: 2) and (max-width: 767px),
    (min-resolution: 192dpi) and (max-width: 767px),
    (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.4)
      ),
      url(${showcase2x});
  }

  @media (min-device-pixel-ratio: 2) and (min-width: 768px),
    (min-resolution: 192dpi) and (min-width: 768px),
    (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.4)
      ),
      url(${showcase2x});
  }

  @media screen and (min-width: 768px) and (max-width: 1359px) {
    padding-top: 378px;
    padding-bottom: 378px;
  }

  @media screen and (min-width: 1360px) {
    padding-top: 272px;
    padding-bottom: 270px;
  }
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 40px;
  margin-bottom: 16px;
  padding: 0 5px;
  @media screen and (min-width: 768px) {
    font-size: 55px;
  }
`
const SubTitle = styled.p`
  font-size: 26px;
  line-height: 1.23;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    line-height: 1.2;
  }

  @media screen and (min-width: 1360px) {
    line-height: 1.35;
  }
`
