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
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.05);
    filter: brightness(120%);
  }

  .icon {
    fill: #28a745;
  }
`

const SelectedText = styled.span`
  margin: 0 8px;
  color: #28a745;
`
