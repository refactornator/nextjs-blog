import Head from 'next/head'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import Footer from '../components/Footer'
import Header from '../components/Header'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: 1.6;
    font-size: 18px;
    background-color: #f7f7f7;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    max-width: 100%;
    display: block;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

const Main = styled.main`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`

const Content = styled.section`
  width: 100%;
  flex: 1 0 auto;
  margin-top: 120px;
  margin-right: auto;
  margin-bottom: auto;
  margin-left: auto;
  max-width: 42rem;
  padding: 1.05rem 0.35rem;
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="William Lindner's Blog, 2 n's" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Main>
          <Header height={120} />
          <Content>
            <Component {...pageProps} />
          </Content>
          <Footer />
        </Main>
      </ThemeProvider>
    </>
  )
}
