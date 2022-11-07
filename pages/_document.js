import styled from '@emotion/styled'
import Document, { Html, Head, Main, NextScript } from 'next/document'

const Body = styled.body`
  margin: 0;
  color: white;
  height: 100vh;
  min-height: -webkit-fill-available;
  background-color: #333;
  font-family: Neue Haas Grotesk Display Pro, Helvetica Neue, sans-serif,
    -apple-system;

  a {
    color: white;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1,
  h2,
  h3 {
    width: 100%;
    max-width: 420px;
    margin-block-start: 0;
    margin-block-end: 0;

    font-family: ivypresto-display, serif;

    @media (min-width: 30em) {
      font-size: 2.75em;
    }

    @media (min-width: 48em) {
      font-size: 3em;
    }

    @media (min-width: 62em) {
      font-size: 5em;
    }

    @media (min-width: 80em) {
      font-size: 6em;
    }
  }
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
