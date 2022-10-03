import styled from 'styled-components'

export default function Title({ children, lineHTab, lineHDesc, style }) {
  return (
    <>
      <TitleWrap lineHDesc={lineHDesc} lineHTab={lineHTab} style={style}>
        {children}
      </TitleWrap>
    </>
  )
}

const TitleWrap = styled.h2`
  font-size: 32px;
  font-weight: 400;
  line-height: 1.375;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: ${props => props.lineHTab || '1.35'};
  }
  @media screen and (min-width: 1360px) {
    line-height: ${props => props.lineHDesc};
  }
`
