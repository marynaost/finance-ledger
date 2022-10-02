import { secondColor, accentColor } from 'styles/stylesVars'
import styled from 'styled-components'
import SocialIcons from 'components/SocialIcons/SocialIcons'

export default function Footer() {
  return (
    <FooterWrap>
      <SocialIcons fill={accentColor} />
      <FooterText>Copyright &#169; 2021 - FinanceLedger</FooterText>
    </FooterWrap>
  )
}

const FooterWrap = styled.footer`
  padding: 20px 0px;
  margin: 0 auto;
  background: ${secondColor};
`

const FooterText = styled.p`
  line-height: 1.375;
  text-align: center;
  margin-top: 12px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.39;
    margin-top: 10px;
  }
`
