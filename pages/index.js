import Image from 'next/image'
import { Box, Heading, Flex, Wrap, WrapItem } from '@chakra-ui/react'
import Clouds from '../components/Clouds'

import profilePic from '../public/images/IMG_4032.JPG'

export default function Home() {
  return (
    <Flex padding="20px">
      <Wrap>
        <WrapItem>
          <Box>
            <Heading
              as="h3"
              w={['100%', '727px']}
              maxWidth={['100%', '727px']}
              fontSize={['50px', '100px', '200px']}
              lineHeight={['50px', '100px', '200px']}
              mt="16px"
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
                width="232px"
                height="309px"
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
