import Link from 'next/link'
import { Box, Flex, Link as ChakraLink, Spacer } from '@chakra-ui/react'

const Header = () => {
  return (
    <Flex width="100%" padding="20px" flex="0 0 auto" backgroundColor="#333">
      <Box>
        <Link href="/" passHref>
          <ChakraLink fontSize="16px" color="white" href="/">
            <b>Liam Lindner</b>
            ©2021
          </ChakraLink>
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Link href="/essays" passHref>
          <ChakraLink color="white" href="/essays">
            Essays
          </ChakraLink>
        </Link>
        <ChakraLink
          ml="32px"
          color="white"
          href="https://github.com/refactornator"
          isExternal
        >
          Github
        </ChakraLink>
      </Box>
    </Flex>
  )
}

export default Header
