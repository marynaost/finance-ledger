import styled from 'styled-components'
import Container from 'components/Container/Container'
import { Picture } from 'components/Picture/Picture'
import people from 'images/home/people.jpg'
import people2 from 'images/home/people@2x.jpg'
import peoplewebp from 'images/home/people.webp'
import peoplewebp2 from 'images/home/people@2x.webp'
export default function About(params) {
  return (
    <Section>
      <Picture
        webp1x={peoplewebp}
        webp2x={peoplewebp2}
        jpg1x={people}
        jpg2x={people2}
        className="picture"
        imgStyle="img"
      />
      <Container className="secondary">
        <SubTitle>What you are looking for</SubTitle>
        <Title>We provide bespoke solutions</Title>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </Text>
        <Button>Read More</Button>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  line-height: 1.375;
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
    font-size: 18px;
    line-height: 1.39;
  }
`
const SubTitle = styled.h3`
  margin-bottom: 16px;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 32px;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.2;
  }
`

const Text = styled.p`
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
  }
`
const Button = styled.button`
  height: 57px;
  width: 156px;
`
