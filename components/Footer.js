import { Box, Center, Flex } from '@chakra-ui/react'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

import { colors } from '../utils/styles'

const Footer = () => {
  return (
    <Flex
      height="46px"
      bg="#f3f5f8"
      borderTop={`1px solid ${colors.store}`}
      justifyContent="center"
    >
      <Center color={colors.midnight} textTransform="uppercase">
        © {new Date().getFullYear().toString()} Liam Lindner
      </Center>
      <Box width="10px" />
      <Flex justifyContent="space-between">
        <a href="https://twitter.com/wlindner" target="_blank" rel="noopener">
          <Center minW="44px" minH="44px">
            <FaTwitter size="30px" color={colors.royal} />
          </Center>
        </a>
        <a
          href="https://github.com/refactornator"
          target="_blank"
          rel="noopener"
        >
          <Center minW="44px" minH="44px">
            <FaGithub size="30px" color={colors.royal} />
          </Center>
        </a>
        <a
          href="https://linkedin.com/in/wlindner"
          target="_blank"
          rel="noopener"
        >
          <Center minW="44px" minH="44px">
            <FaLinkedin size="30px" color={colors.royal} />
          </Center>
        </a>
      </Flex>
    </Flex>
  )
}
export default Footer
