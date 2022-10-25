import Image from 'next/image'
import { Box, Flex, Center, useBreakpointValue } from '@chakra-ui/react'

import Title from '../components/Title'
import Tao from '../components/Tao'

import profilePic from '../public/images/garden-headshot.jpg'

export default function Index() {
  const titleAreaWidth = useBreakpointValue({
    sm: '100%',
    md: '680px',
  })

  return (
    <Flex width="100%" padding="20px" flexWrap="wrap" justifyContent="center">
      <Flex
        width={titleAreaWidth}
        direction="column"
        justifyContent="flex-start"
      >
        <Title>The Tao of Liam.</Title>
        <Center marginY="26px">
          <Image
            priority
            src={profilePic}
            alt="Picture of the author"
            width={260}
            height={260}
          />
        </Center>
      </Flex>
      <Box flexGrow={1}>
        <Tao />
      </Box>
    </Flex>
  )
}
