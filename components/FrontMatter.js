import React from 'react'
import { useBreakpointValue, Text, Flex } from '@chakra-ui/react'

import Date from './Date'
import Title from './Title'

const FrontMatter = ({ date, title }) => {
  const frontMatterPosition = useBreakpointValue({
    lg: 'relative',
    // xl: 'fixed', // https://github.com/chakra-ui/chakra-ui/issues/2601
  })
  return (
    <Flex direction="column" position={frontMatterPosition}>
      <Text color="white">
        <Date dateString={date} />
      </Text>
      <Title text={title} essayTitle></Title>
    </Flex>
  )
}

export default FrontMatter
