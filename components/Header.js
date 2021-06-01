import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Center,
  Link as ChakraLink,
  HStack,
  Avatar,
  Spacer,
  Container,
} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

const NavItem = ({ children, href, external, square }) => {
  return (
    <Link href={href}>
      <ChakraLink
        href={href}
        fontSize="4xl"
        fontWeight="bolder"
        isExternal={external}
      >
        <Center
          p="10px"
          bg="#ffb83f"
          borderRadius={square ? '0' : '10px'}
          height="60px"
          width="60px"
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
      background="linear-gradient(180deg, hsla(38, 100%, 62%, 1) 0%, hsla(220, 53%, 68%, 1) 80%)"
      boxShadow="base"
      position="fixed"
      transition="height 0.5s ease"
      h={scrolled ? '60px' : '120px'}
    >
      <Container maxW="container.sm">
        <HStack spacing={8} zIndex={1000}>
          <Link href={'/'}>
            <ChakraLink
              href={'/'}
              color="#829fd9"
              fontSize="4xl"
              fontWeight="bolder"
            >
              <Avatar
                size="xl"
                name="William Lindner"
                src="/images/profile2.jpg"
                borderWidth="2px"
                borderColor="#ffb83f"
                transition="all 0.5s ease"
                _hover={{
                  borderColor: 'white',
                }}
              />
            </ChakraLink>
          </Link>
          <Spacer />
          <NavItem
            external
            square={scrolled}
            href="https://github.com/williamdotcool"
          >
            <FaGithub size="42px" />
          </NavItem>
        </HStack>
      </Container>
    </Center>
  )
}

export default Header
