import Image from 'next/image'
import { Box, Heading, Flex, Center } from '@chakra-ui/react'

import Clouds from '../components/Clouds'

import profilePic from '../public/images/garden-headshot.jpg'

export default function Home() {
  return (
    <Flex padding="20px" w="100%" flexWrap="wrap" justifyContent="center">
      <Box>
        <Flex
          mb="50px"
          direction="column"
          justifyContent="center"
          w={{ lg: '680px', sm: '500px', base: '100%' }}
        >
          <Heading
            as="h3"
            w="100%"
            maxWidth="100%"
            fontSize={{ base: '80px', md: '130px', lg: '180px' }}
            lineHeight={{ base: '80px', md: '130px', lg: '180px' }}
            mb="30px"
            color="white"
            fontFamily="ivypresto-display, serif"
          >
            The Tao <br />
            of Liam.
          </Heading>
          <Center>
            <Image
              src={profilePic}
              alt="Picture of the author"
              width="260px"
              height="260px"
            />
          </Center>
        </Flex>
      </Box>
      <Box flexGrow={1}>
        <Clouds />
      </Box>
    </Flex>
  )
}
