import styled from 'styled-components'
import Container from 'components/Container/Container'
import { Picture } from 'components/Picture/Picture'
import SubTitle from 'components/Subtitle'
import cases1jpg from 'images/cases/cases1.jpg'
import cases1Webp from 'images/cases/cases1.webp'
import cases1jpg2x from 'images/cases/cases1@2x.jpg'
import cases1Webp2x from 'images/cases/cases1@2x.webp'
import cases2jpg from 'images/cases/cases2.jpg'
import cases2Webp from 'images/cases/cases2.webp'
import cases2jpg2x from 'images/cases/cases2@2x.jpg'
import cases2Webp2x from 'images/cases/cases2@2x.webp'
import cases3jpg from 'images/cases/cases3.jpg'
import cases3Webp from 'images/cases/cases3.webp'
import cases3jpg2x from 'images/cases/cases3@2x.jpg'
import cases3Webp2x from 'images/cases/cases3@2x.webp'
import cases5jpg from 'images/cases/cases5.jpg'
import cases5Webp from 'images/cases/cases5.webp'
import cases5jpg2x from 'images/cases/cases5@2x.jpg'
import cases5Webp2x from 'images/cases/cases5@2x.webp'
import cases7jpg from 'images/cases/cases7.jpg'
import cases7Webp from 'images/cases/cases7.webp'
import cases7jpg2x from 'images/cases/cases7@2x.jpg'
import cases7Webp2x from 'images/cases/cases7@2x.webp'
import cases4jpg from 'images/cases/cases4.jpg'
import cases4Webp from 'images/cases/cases4.webp'
import cases4jpg2x from 'images/cases/cases4@2x.jpg'
import cases4Webp2x from 'images/cases/cases4@2x.webp'

export default function Cases(params) {
  return (
    <Section id="cases">
      <Container>
        <SubTitle lineHDesc="1.83" style={{ marginBottom: '16px' }}>
          This is what we do
        </SubTitle>
        <Title>Business Cases</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </Text>
        <CasesList>
          <CasesItem>
            <a href={cases1jpg} data-lightbox="cases" data-title="My caption">
              <Picture
                webp1x={cases1Webp}
                webp2x={cases1Webp2x}
                jpg1x={cases1jpg}
                jpg2x={cases1jpg2x}
              />
            </a>
          </CasesItem>
          <CasesItem>
            <a href={cases3jpg} data-lightbox="cases" data-title="My caption">
              <Picture
                webp1x={cases3Webp}
                webp2x={cases3Webp2x}
                jpg1x={cases3jpg}
                jpg2x={cases3jpg2x}
              />
            </a>
          </CasesItem>
          <CasesItem>
            <a href={cases5jpg} data-lightbox="cases" data-title="My caption">
              <Picture
                webp1x={cases5Webp}
                webp2x={cases5Webp2x}
                jpg1x={cases5jpg}
                jpg2x={cases5jpg2x}
              />
            </a>
          </CasesItem>
          <CasesItem>
            <a href={cases7jpg} data-lightbox="cases" data-title="My caption">
              <Picture
                webp1x={cases7Webp}
                webp2x={cases7Webp2x}
                jpg1x={cases7jpg}
                jpg2x={cases7jpg2x}
              />
            </a>
          </CasesItem>
          <CasesItem>
            <a href={cases2jpg} data-lightbox="cases" data-title="My caption">
              <Picture
                webp1x={cases2Webp}
                webp2x={cases2Webp2x}
                jpg1x={cases2jpg}
                jpg2x={cases2jpg2x}
              />
            </a>
          </CasesItem>
          <CasesItem>
            <a href={cases4jpg} data-lightbox="cases" data-title="My caption">
              <Picture
                webp1x={cases4Webp}
                webp2x={cases4Webp2x}
                jpg1x={cases4jpg}
                jpg2x={cases4jpg2x}
              />
            </a>
          </CasesItem>
        </CasesList>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding: 56px 0 40px;
  text-align: center;
  color: #333333;
  @media screen and (min-width: 768px) {
    padding: 48px 0 40px;
  }
  @media screen and (min-width: 1360px) {
    padding: 80px 0;
  }
`

const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 32px;
  font-weight: 400;
  line-height: 1.375;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.35;
  }
  @media screen and (min-width: 1360px) {
    font-size: 40px;
    line-height: 1.2;
  }
`

const Text = styled.p`
  margin-bottom: 31px;
  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
    font-size: 18px;
  }
  @media screen and (min-width: 1360px) {
    margin-bottom: 36px;
  }
`

const CasesList = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: -9px;
  }
  @media screen and (min-width: 1360px) {
    margin: -12px -10px;
  }
`

const CasesItem = styled.li`
  display: flex;
  justify-content: center;
  &:hover,
  &:focus {
    opacity: 0.8;
  }

  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
  @media screen and (min-width: 768px) {
    width: calc((100% - 54px) / 3);
    margin: 9px;
  }
  @media screen and (min-width: 1360px) {
    width: calc((100% - 60px) / 3);
    margin: 12px 10px;
  }
`
