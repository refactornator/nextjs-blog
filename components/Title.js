import React from 'react'
import { useBreakpointValue, Heading } from '@chakra-ui/react'

const Title = ({ text = '', essayTitle = false }) => {
  const titleWidth = useBreakpointValue({
    md: '100%',
    lg: '580px',
  })
  const pageTitleFontSize = useBreakpointValue({
    sm: '54px',
    md: '72px',
    lg: '136px',
    xl: '162px',
  })
  const essayTitleFontSizes = useBreakpointValue({
    sm: '42px',
    md: '74px',
  })
  const titleFontSize = essayTitle ? essayTitleFontSizes : pageTitleFontSize
  return (
    <Heading
      color="white"
      width={titleWidth}
      fontSize={titleFontSize}
      lineHeight={titleFontSize}
    >
      {text}
    </Heading>
  )
}

export default Title
