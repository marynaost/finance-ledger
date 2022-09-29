import { FaFacebook, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa'
import styled from 'styled-components'
export default function Footer(params) {
  return (
    <FooterWrap>
      <SocialIconsList>
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
      <FooterText>Copyright &#169; 2021 - FinanceLedger</FooterText>
    </FooterWrap>
  )
}

const FooterWrap = styled.footer`
  padding: 20px 0px;
  margin: 0 auto;
  background: #333;
`

const SocialIconsList = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
  }

  .icon {
    fill: #ffffff;
    width: 35px;
    height: 35px;
    &:hover,
    &:focus {
      fill: #28a745;
    }
  }
`

const SocialIconsItem = styled.li`
  height: 35px;
  &:not(:last-child) {
    margin-right: 25px;
  }
`
const FooterText = styled.p`
  line-height: 1.375;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.39;
  }
`
