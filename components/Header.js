import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Center, Link as ChakraLink, HStack } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

import AnimatedShapes from './AnimatedShapes'

const NavItem = ({ children, href, external, square }) => {
  return (
    <Link href={href}>
      <ChakraLink
        href={href}
        color="#829fd9"
        fontSize="4xl"
        fontWeight="bolder"
        isExternal={external}
      >
        <Center
          p="10px"
          bg="#ffb83f"
          borderRadius={square ? '0' : '10px'}
          height="60px"
          width="120px"
          boxShadow="xl"
          transition="all 0.5s ease"
          _hover={{
            background: 'white',
          }}
          _active={{
            transition: 'background 0.0s',
            background: '#ffb83f',
            boxShadow: 'md',
          }}
        >
          {children}
        </Center>
      </ChakraLink>
    </Link>
  )
}

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
    <Center
      top={0}
      w="100%"
      bg="#829fd9"
      boxShadow="base"
      position="fixed"
      transition="height 0.5s ease"
      h={scrolled ? '60px' : '120px'}
    >
      <HStack spacing={8} zIndex={1000}>
        <NavItem href="/" square={scrolled}>
          Home
        </NavItem>
        <NavItem
          external
          square={scrolled}
          href="https://github.com/williamdotcool"
        >
          <FaGithub size="42px" />
        </NavItem>
      </HStack>
      <AnimatedShapes animate={!scrolled} />
    </Center>
  )
}

export default Header
