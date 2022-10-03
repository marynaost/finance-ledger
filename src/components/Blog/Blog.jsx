import styled from 'styled-components'
import Container from 'components/Container/Container'
import Button from 'components/Button/Button'
import { Picture } from 'components/Picture/Picture'
import SubTitle from 'components/Subtitle/Subtitle'
import Text from 'components/Text/Text'
import Title from 'components/Title/Title'
import blog from 'images/home/blog.jpg'
import blog2 from 'images/home/blog@2x.jpg'
import blogwebp from 'images/home/blog.webp'
import blogwebp2 from 'images/home/blog@2x.webp'

export default function Blog() {
  return (
    <Section id="blog">
      <Picture
        webp1x={blogwebp}
        webp2x={blogwebp2}
        jpg1x={blog}
        jpg2x={blog2}
        className="picture"
        imgStyle="img"
      />
      <Container className="secondary">
        <SubTitle style={{ marginBottom: '16px' }}>April 16 2020</SubTitle>
        <Title style={{ marginBottom: '24px' }}>Blog Post One</Title>
        <Text style={{ marginBottom: '24px' }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </Text>
        <Button blog type="button">
          Read Our Blog
        </Button>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  background: #0284d0;
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
    padding-top: 48px;
    padding-bottom: 58px;

    @media screen and (min-width: 768px) {
      width: 52%;
      margin: 0;
      padding: 59px 32px;
    }

    @media screen and (min-width: 1360px) {
      padding: 80px 20px 80px 28px;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
  }
`
