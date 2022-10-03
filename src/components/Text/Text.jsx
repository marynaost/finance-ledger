import styled from 'styled-components'
export default function Text({ children, style }) {
  return <TextWrap style={style}>{children}</TextWrap>
}

const TextWrap = styled.p`
  line-height: 1.375;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.39;
  }
`
