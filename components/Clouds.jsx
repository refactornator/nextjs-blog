import { Box, Grid, Text, Flex } from '@chakra-ui/react'

const items = [
  {
    title: 'Question dogma.',
    subtitle: 'There is no one right way, and the way will always change.',
  },
  {
    title: 'Social connection is essential.',
    subtitle:
      'We need diverse communities that foster vulnerable honesty in order to thrive.',
  },
  {
    title: 'Celebrate your body!',
    subtitle:
      'We only get one, take care of it and use it to uplift yourself and others.',
  },
  {
    title: 'Attention is our scarcest resource.',
    subtitle:
      "Don't give your attention to things that harm others. Find time to be with yourself.",
  },
  {
    title: 'Learn from the past.',
    subtitle:
      'Life is a chance to continuously learn and build a better future for those to come.',
  },
  {
    title: 'Don’t take yourself too seriously.',
    subtitle: 'Tear down your ego and have some fun.',
  },
]

const TaoItem = ({ title, subtitle }) => {
  return (
    <Flex w={['100%', '200px']} mb={['10px', 0]}>
      <Text color="white">
        {title} <span style={{ opacity: '50%' }}>{subtitle}</span>
      </Text>
    </Flex>
  )
}

function Clouds() {
  return (
    <Box w={['100%', '680px']} maxWidth={['100%', '680px']} position="relative">
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(5, 1fr)']} zIndex={10}>
        <Box />
        <TaoItem title={items[0].title} subtitle={items[0].subtitle} />
        <Box />
        <Box />
        <Box />

        <Box />
        <Box />
        <Box />
        <Box />
        <TaoItem title={items[1].title} subtitle={items[1].subtitle} />

        <TaoItem title={items[2].title} subtitle={items[2].subtitle} />
        <Box />
        <Box />
        <Box />
        <Box />

        <Box />
        <Box />
        <Box />
        <TaoItem title={items[3].title} subtitle={items[3].subtitle} />
        <Box />

        <Box />
        <TaoItem title={items[4].title} subtitle={items[4].subtitle} />
        <Box />
        <Box />
        <Box />

        <Box />
        <Box />
        <Box />
        <TaoItem title={items[5].title} subtitle={items[5].subtitle} />
        <Box />
      </Grid>
    </Box>
  )
}

export default Clouds
