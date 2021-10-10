import Image from 'next/image'
import { Box, Heading, Flex, Wrap, WrapItem } from '@chakra-ui/react'

import Clouds from '../components/Clouds'

import profilePic from '../public/images/garden-headshot.jpg'

export default function Home() {
  return (
    <Flex padding="20px">
      <Wrap>
        <WrapItem>
          <Box>
            <Heading
              as="h3"
              w={['100%', '600px']}
              maxWidth={['100%', '600px']}
              fontSize={['30px', '50px', '100px']}
              lineHeight={['30px', '50px', '100px']}
              mt="16px"
              mb="60px"
              color="white"
              fontFamily="ivypresto-display, serif"
            >
              The Tao of Liam.
            </Heading>
            <Flex
              justifyContent={['center', 'flex-end']}
              pr={['0px', '150px']}
              my={['40px', '0px']}
            >
              <Image
                src={profilePic}
                alt="Picture of the author"
                width="260px"
                height="260px"
              />
            </Flex>
          </Box>
        </WrapItem>
        <WrapItem>
          <Clouds />
        </WrapItem>
      </Wrap>
    </Flex>
  )
}
