import { Box, Text, Flex } from '@chakra-ui/react'
import useWindowDimensions from '../hooks/useWindowDimensions'

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
    title: "Don't take yourself too seriously.",
    subtitle: 'Tear down your ego and have some fun.',
  },
]

const TaoItem = ({ title, subtitle, floatAt }) => {
  const { width } = useWindowDimensions()
  const isLargerThan480 = width >= 480
  return (
    <Flex
      minWidth="200px"
      maxWidth={isLargerThan480 ? floatAt : '100%'}
      justifyContent={isLargerThan480 ? 'flex-end' : 'center'}
    >
      <Box w={isLargerThan480 ? '200px' : '265px'} mb="12px">
        <Text color="white">
          {title} <span style={{ opacity: '50%' }}>{subtitle}</span>
        </Text>
      </Box>
    </Flex>
  )
}

function Tao() {
  return (
    <Box w="100%" position="relative" mb="32px">
      <TaoItem
        title={items[0].title}
        subtitle={items[0].subtitle}
        floatAt="50%"
      />
      <TaoItem
        title={items[1].title}
        subtitle={items[1].subtitle}
        floatAt="100%"
      />
      <TaoItem
        title={items[2].title}
        subtitle={items[2].subtitle}
        floatAt="30%"
      />
      <TaoItem
        title={items[3].title}
        subtitle={items[3].subtitle}
        floatAt="80%"
      />
      <TaoItem
        title={items[4].title}
        subtitle={items[4].subtitle}
        floatAt="50%"
      />
      <TaoItem
        title={items[5].title}
        subtitle={items[5].subtitle}
        floatAt="80%"
      />
    </Box>
  )
}

export default Tao
