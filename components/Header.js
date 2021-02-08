import { useState, useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import GitHubIcon from '@material-ui/icons/GitHub'

import AnimatedShapes from './AnimatedShapes'

const Background = styled.header`
  top: 0;
  width: 100%;
  height: ${({ height }) => height || 120}px;
  transition: height 0.5s ease;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: #829fd9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
`

const Nav = styled.nav`
  z-index: 1;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-radius 0.5s ease;
  padding: ${({ round }) => (round ? '10px' : '0 10px')};

  font-size: 36px;
  font-weight: bolder;
  background-color: #f99645;
  border-radius: ${({ square, round }) =>
    square ? (round ? '50%' : '10px') : '0'};

  a {
    color: white;
    display: flex;
  }
`

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    setScrolled(window.scrollY > 40)
  }

  useEffect(() => {
    addEventListener('scroll', handleScroll)
    return () => {
      removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Background height={scrolled ? 60 : 120}>
      <Nav>
        <NavItem square={!scrolled} style={{ height: 60 }}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </NavItem>
        <NavItem square={!scrolled} round style={{ width: 60, height: 60 }}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/williamdotcool"
          >
            <GitHubIcon fontSize="large" />
          </a>
        </NavItem>
      </Nav>
      <AnimatedShapes animate={!scrolled} />
    </Background>
  )
}

export default Header
