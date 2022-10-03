import styled from 'styled-components'
import Container from 'components/Container/Container'
import Button from 'components/Button/Button'
import { Picture } from 'components/Picture/Picture'
import SubTitle from 'components/Subtitle/Subtitle'
import Text from 'components/Text/Text'
import Title from 'components/Title/Title'
import people from 'images/home/people.jpg'
import people2 from 'images/home/people@2x.jpg'
import peoplewebp from 'images/home/people.webp'
import peoplewebp2 from 'images/home/people@2x.webp'

export default function About() {
  return (
    <Section id="about">
      <Picture
        webp1x={peoplewebp}
        webp2x={peoplewebp2}
        jpg1x={people}
        jpg2x={people2}
        className="picture"
        imgStyle="img"
      />
      <Container className="secondary">
        <SubTitle style={{ marginBottom: '16px' }}>
          What you are looking for
        </SubTitle>
        <Title lineHTab="1.2" style={{ marginBottom: '24px' }}>
          We provide bespoke solutions
        </Title>
        <Text style={{ marginBottom: '24px' }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </Text>
        <Button about type="button">
          Read More
        </Button>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  background: #28a745;
  .picture {
    @media screen and (min-width: 768px) {
      width: 48%;
    }
  }
  .img {
    @media screen and (min-width: 768px) {
      height: 100%;
      object-fit: cover;
    }
  }
  .secondary {
    padding-top: 79px;
    padding-bottom: 79px;

    @media screen and (min-width: 768px) {
      width: 52%;
      margin: 0;
      padding: 62px 32px;
    }

    @media screen and (min-width: 1360px) {
      padding: 80px 28px 86px 20px;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`
