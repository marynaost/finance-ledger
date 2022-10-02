import styled from 'styled-components'

export default function Container({ children, className }) {
  return <ContainerWrap className={className}>{children}</ContainerWrap>
}

const ContainerWrap = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 10px;
  @media screen and (min-width: 320px) {
    padding: 0 20px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1360px) {
    padding: 0 28px;
  }
`
