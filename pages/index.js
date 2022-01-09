import Image from 'next/image'
import { Box, Heading, Flex, Wrap, WrapItem } from '@chakra-ui/react'

import Clouds from '../components/Clouds'

import profilePic from '../public/images/garden-headshot.jpg'

export default function Home() {
  return (
    <Flex padding="20px" w="100%" flexWrap="wrap">
      <Box>
        <Box mb="50px" w={{ lg: '680px', sm: '500px', base: '100%' }}>
          <Heading
            as="h3"
            w="100%"
            maxWidth="100%"
            fontSize={{ base: '80px', md: '130px', lg: '180px' }}
            lineHeight={{ base: '80px', md: '130px', lg: '180px' }}
            mt="16px"
            mb="60px"
            color="white"
            fontFamily="ivypresto-display, serif"
          >
            The Tao <br />
            of Liam.
          </Heading>
          <Flex justifyContent="center">
            <Image
              src={profilePic}
              alt="Picture of the author"
              width="260px"
              height="260px"
            />
          </Flex>
        </Box>
      </Box>
      <Box flexGrow={1}>
        <Clouds />
      </Box>
    </Flex>
  )
}
