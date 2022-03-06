import { Link as ChakraLink, Flex } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex
      width="100%"
      padding="20px"
      zIndex={100}
      flex="0 0 auto"
      backgroundColor="#333"
    >
      <ChakraLink
        mr="32px"
        color="white"
        href="https://twitter.com/wlindner"
        isExternal
      >
        Twitter
      </ChakraLink>
      <ChakraLink
        color="white"
        href="https://linkedin.com/in/wlindner"
        isExternal
      >
        Linkedin
      </ChakraLink>
    </Flex>
  )
}
export default Footer
