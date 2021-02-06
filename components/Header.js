import { useState } from 'react'
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
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  min-height: 60px;
  min-width: 60px;

  font-size: 36px;
  font-weight: bolder;
  background-color: #f99645;
  border-radius: ${({ borderRadius }) => borderRadius || '50%'};

  a {
    color: white;
  }
`

const Header = ({ height }) => {
  const [animate, setAnimate] = useState(false)

  return (
    <Background
      height={height}
      onMouseOver={() => setAnimate(true)}
      onMouseOut={() => setAnimate(false)}
    >
      <Nav>
        <NavItem borderRadius="10px">
          <Link href="/">
            <a>Home</a>
          </Link>
        </NavItem>
        <NavItem>
          <a
            borderRadius="50%"
            target="_blank"
            href="https://github.com/williamdotcool"
          >
            <GitHubIcon fontSize="large" />
          </a>
        </NavItem>
      </Nav>
      <AnimatedShapes animate={animate} />
    </Background>
  )
}

export default Header
