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
  const imageMarginTop = useBreakpointValue({
    sm: '32px',
    md: '64px',
  })

  return (
    <Flex
      width="100%"
      padding="20px"
      flexWrap="wrap"
      justifyContent="center"
      marginBottom="64px"
    >
      <Flex
        maxHeight="700px"
        width={titleAreaWidth}
        direction="column"
        justifyContent="flex-start"
      >
        <Title>The Tao of Liam.</Title>
        <Center marginTop={imageMarginTop}>
          <Image
            src={profilePic}
            alt="Picture of the author"
            width="260px"
            height="260px"
          />
        </Center>
      </Flex>
      <Box flexGrow={1}>
        <Tao />
      </Box>
    </Flex>
  )
}
