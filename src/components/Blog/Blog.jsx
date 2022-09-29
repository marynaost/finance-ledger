import styled from 'styled-components'
import Container from 'components/Container/Container'
import Button from 'components/Button/Button'
import { Picture } from 'components/Picture/Picture'
import blog from 'images/home/blog.jpg'
import blog2 from 'images/home/blog@2x.jpg'
import blogwebp from 'images/home/blog.webp'
import blogwebp2 from 'images/home/blog@2x.webp'
export default function Blog(params) {
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
        <SubTitle>April 16 2020</SubTitle>
        <Title>Blog Post One</Title>
        <Text>
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
  line-height: 1.375;
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
    line-height: 1.35;
  }
`

const Text = styled.p`
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
  }
`
