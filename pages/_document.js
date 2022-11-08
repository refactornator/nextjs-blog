import styled from '@emotion/styled'
import Document, { Html, Head, Main, NextScript } from 'next/document'

const Body = styled.body`
  margin: 0;
  color: white;
  height: 100vh;
  min-height: -webkit-fill-available;
  background-color: #333;
`

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <Body>
          <Main />
          <NextScript />
        </Body>
      </Html>
    )
  }
}
