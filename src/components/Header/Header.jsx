import styled from 'styled-components'
import Container from 'components/Container/Container'
import Logo from '../Logo/Logo'

export default function Header(params) {
  return (
    <HeaderWrap>
      <Container>
        <Nav>
          <Logo />
          <NavList>
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Cases</NavItem>
            <NavItem>Blog</NavItem>
            <NavItem>Contact</NavItem>
          </NavList>
        </Nav>
      </Container>
    </HeaderWrap>
  )
}

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  padding-top: 22px;
  z-index: 1;
  overflow: hidden;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`

// const Logo = styled.a`
//   margin-bottom: 16px;
// `

const NavList = styled.ul`
  display: flex;
`
const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 12px;
  }
`
