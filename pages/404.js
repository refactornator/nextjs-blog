import { Box, Center, Heading, VStack } from '@chakra-ui/react'
import ReactPlayer from 'react-player'

export default function Custom404() {
  return (
    <VStack w="100%" mb="40px">
      <Center>
        <Heading
          size="xl"
          fontFamily="courier"
          fontWeight="extrabold"
          marginY="42px"
        >
          404: Page Not Found
        </Heading>
      </Center>

      <Box minW="266px" minH="470px">
        <ReactPlayer
          width="266px"
          height="470px"
          url={[{ src: '/videos/intro.mp4', type: 'video/mp4' }]}
          playing
          controls
          light
          loop
        />
      </Box>
    </VStack>
  )
}
