import { Link as ChakraLink, Flex } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex
      width="100%"
      maxWidth="700px"
      padding="20px"
      position="fixed"
      bottom={0}
      left={0}
      opacity={0.9}
      backgroundColor="#333"
      zIndex={1}
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
