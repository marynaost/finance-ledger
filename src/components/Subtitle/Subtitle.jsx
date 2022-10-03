import styled from 'styled-components'

export default function SubTitle({
  children,
  sizeTab,
  lineHTab,
  lineHDesc,
  style,
}) {
  return (
    <SubTitleWrap
      sizeTab={sizeTab}
      lineHTab={lineHTab}
      lineHDesc={lineHDesc}
      style={style}
    >
      {children}
    </SubTitleWrap>
  )
}

const SubTitleWrap = styled.h3`
  font-weight: 400;
  line-height: 1.375;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: ${props => props.sizeTab || '18px'};
    line-height: ${props => props.lineHTab || '1.39'};
  }
  @media screen and (min-width: 1360px) {
    line-height: ${props => props.lineHDesc};
  }
`
