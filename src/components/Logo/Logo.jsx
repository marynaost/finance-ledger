import { FaBookOpen } from 'react-icons/fa'
import styled from 'styled-components'
export default function Logo(params) {
  return (
    <LogoLink href="/">
      <FaBookOpen className="icon" width="40" height="35"></FaBookOpen>
      <SelectedText>Finance</SelectedText> Ledger
    </LogoLink>
  )
}

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 28px;
  line-height: 1.36;
  color: inherit;
  .icon {
    fill: #28a745;
    /* width: 40px;
    height: 30px; */
  }
`

const SelectedText = styled.span`
  margin: 0 8px;
  color: #28a745;
`
