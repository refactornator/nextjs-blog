import { ColorModeScript } from '@chakra-ui/react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import styled from '@emotion/styled'

import theme from '../utils/theme'

const Body = styled.body`
  background-color: #333;
`

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <Body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </Body>
      </Html>
    )
  }
}
