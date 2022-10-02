import styled from 'styled-components'
import Container from 'components/Container/Container'
import { Picture } from 'components/Picture/Picture'
import {
  secondColor,
  duration,
  timingFunc,
  overlayBgColor,
  boxShadow,
} from 'styles/stylesVars'
import SubTitle from 'components/Subtitle'
import SocialIcons from 'components/SocialIcons/SocialIcons'

import person1jpg from '../../images/team/person1.jpg'
import person1Webp from '../../images/team/person1.webp'
import person1jpg2x from '../../images/team/person1@2x.jpg'
import person1Webp2x from '../../images/team/person1@2x.webp'
import person2jpg from '../../images/team/person2.jpg'
import person2Webp from '../../images/team/person2.webp'
import person2jpg2x from '../../images/team/person2@2x.jpg'
import person2Webp2x from '../../images/team/person2@2x.webp'
import person3jpg from '../../images/team/person3.jpg'
import person3Webp from '../../images/team/person3.webp'
import person3jpg2x from '../../images/team/person3@2x.jpg'
import person3Webp2x from '../../images/team/person3@2x.webp'

export default function Team() {
  return (
    <Section>
      <Container>
        <SubTitle
          lineHTab="1.65"
          sizeTab="20px"
          lineHDesc="1.35"
          style={{ marginBottom: '16px' }}
        >
          Who we are
        </SubTitle>
        <Title style={{}}>Our Professional Team</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </Text>
        <TeamList>
          <TeamItem>
            <TeamItemThumb>
              <Picture
                imgStyle="picture"
                webp1x={person1Webp}
                webp2x={person1Webp2x}
                jpg1x={person1jpg}
                jpg2x={person1jpg2x}
              />
              <Overlay className="overlay">
                <SocialIcons opacity="0.8" />
              </Overlay>
            </TeamItemThumb>
            <div>
              <Name>John Doe</Name>
              <Profession>President</Profession>
            </div>
          </TeamItem>
          <TeamItem>
            <TeamItemThumb>
              <Picture
                imgStyle="picture"
                webp1x={person2Webp}
                webp2x={person2Webp2x}
                jpg1x={person2jpg}
                jpg2x={person2jpg2x}
              />
              <Overlay className="overlay">
                <SocialIcons opacity="0.8" />
              </Overlay>
            </TeamItemThumb>
            <div>
              <Name>Jane Doe</Name>
              <Profession>Vice President</Profession>
            </div>
          </TeamItem>
          <TeamItem>
            <TeamItemThumb>
              <Picture
                imgStyle="picture"
                webp1x={person3Webp}
                webp2x={person3Webp2x}
                jpg1x={person3jpg}
                jpg2x={person3jpg2x}
              />
              <Overlay className="overlay">
                <SocialIcons opacity="0.8" />
              </Overlay>
            </TeamItemThumb>
            <div>
              <Name>Steve Smith</Name>
              <Profession>Marketing Head</Profession>
            </div>
          </TeamItem>
        </TeamList>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding: 72px 0 50px;
  text-align: center;
  color: ${secondColor};

  @media screen and (min-width: 768px) {
    padding: 50px 0 40px;
  }
  @media screen and (min-width: 1360px) {
    padding: 80px 0 88px;
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
`

const Text = styled.p`
  margin-bottom: 63px;
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 18px;
  }
  @media screen and (min-width: 1360px) {
    margin-bottom: 36px;
  }
`
const TeamList = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: -9px;
  }
  @media screen and (min-width: 1360px) {
    margin: -11px;
  }
`
const TeamItem = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
  @media screen and (min-width: 768px) {
    width: calc((100% - 54px) / 3);
    margin: 9px;
  }
  @media screen and (min-width: 1360px) {
    width: calc((100% - 66px) / 3);
    margin: 11px;
  }
`
const TeamItemThumb = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 16px;
  transition: box-shadow ${duration} ${timingFunc};
  &:hover,
  &:focus {
    box-shadow: ${boxShadow};
  }
  &:hover .overlay {
    transform: scale(1.2);
    opacity: 1;
  }
  &:hover .picture {
    transform: scale(1.05);
  }
`

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${overlayBgColor};
  overflow: auto;
  transform: scale(0);
  transition: transform 350ms ${timingFunc}, opacity 350ms ${timingFunc};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Name = styled.p`
  font-size: 20px;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1;
  }
`
const Profession = styled.p`
  line-height: 1.375;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.39;
  }
`
