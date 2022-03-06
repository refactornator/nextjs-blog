import { Link as ChakraLink, Flex } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex padding="20px" zIndex={1} position="fixed" bottom={0} left={0}>
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
