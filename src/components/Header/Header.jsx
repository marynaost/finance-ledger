import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import Container from 'components/Container/Container'
import Logo from 'components/Logo/Logo'

export default function Header() {
  const [position, setPosition] = useState(0)

  const handleScroll = () => {
    setPosition(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [position])

  const initialHeaderHeight =
    document.documentElement.clientWidth < 768 ? 120 : 70

  const setBackground = () => {
    if (position > initialHeaderHeight) {
      return 'rgba(0, 0, 0, 0.8)'
    }
  }
  const background = setBackground()

  return (
    <HeaderWrap background={background}>
      <Container>
        <Nav>
          <Logo />
          <NavList>
            <NavItem>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="link"
              >
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="link"
              >
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="cases"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="link"
              >
                Cases
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="blog"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="link"
              >
                Blog
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="link"
              >
                Contact
              </Link>
            </NavItem>
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
  padding-bottom: 22px;
  z-index: 1;
  overflow: hidden;
  background: ${props => props.background};
  @media screen and (min-width: 768px) {
    padding-top: 16px;
    padding-bottom: 16px;
  }
  @media screen and (min-width: 1360px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const NavList = styled.ul`
  display: flex;
  margin-top: 16px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`
const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 12px;
  }
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
  @media screen and (min-width: 1360px) {
    &:not(:last-child) {
      margin-right: 46px;
    }
  }

  .link {
    position: relative;
    &:hover::after,
    &:focus::after {
      opacity: 1;
      transform: scaleX(1);
    }

    &::after {
      position: absolute;
      left: 0;
      display: block;
      content: '';
      width: 100%;
      height: 4px;
      border-radius: 2px;
      background: #28a745;
      opacity: 0;
      transform: scale(0);
      transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
        transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 1.39;
    }
  }
`
