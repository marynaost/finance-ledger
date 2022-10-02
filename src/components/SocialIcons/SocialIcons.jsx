import styled from 'styled-components'
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa'
import { mainTextColor } from 'styles/stylesVars'

export default function SocialIcons({ fill, opacity }) {
  return (
    <>
      <SocialIconsList fill={fill} opacity={opacity}>
        <SocialIconsItem>
          <a
            href="https://www.facebook.com/"
            target="blank"
            aria-label="facebook"
          >
            <FaFacebook className="icon" />
          </a>
        </SocialIconsItem>
        <SocialIconsItem>
          <a
            href="https://www.twitter.com/"
            target="blank"
            aria-label="twitter"
          >
            <FaTwitter className="icon" />
          </a>
        </SocialIconsItem>
        <SocialIconsItem>
          <a
            href="https://www.youtube.com/"
            target="blank"
            aria-label="youtube"
          >
            <FaYoutube className="icon" />
          </a>
        </SocialIconsItem>
        <SocialIconsItem>
          <a
            href="https://www.linkedin.com/"
            target="blank"
            aria-label="linkedin"
          >
            <FaLinkedinIn className="icon" />
          </a>
        </SocialIconsItem>
      </SocialIconsList>
    </>
  )
}

const SocialIconsList = styled.ul`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
  }

  .icon {
    fill: ${mainTextColor};
    width: 35px;
    height: 35px;
    &:hover,
    &:focus {
      fill: ${props => props.fill};
      opacity: ${props => props.opacity};
    }
  }
`

const SocialIconsItem = styled.li`
  height: 35px;
  &:not(:last-child) {
    margin-right: 25px;
  }
`
