import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as ackeeTracker from 'ackee-tracker'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import Footer from '../components/Footer'
import Header from '../components/Header'

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #__next {
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: 1.6;
    font-size: 18px;
    background-color: #f7f7f7;
  }

  html {
    overflow-y: scroll!important;
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
`

export const siteTitle = "William Lindner's Blog, 2 n's"

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    let ackee
    if (router.isReady) {
      ackee = ackeeTracker.create('https://sad-dijkstra-e51d59.netlify.app', {
        detailed: true,
      })
    }

    router.events.on('routeChangeComplete', () => {
      if (ackee) {
        ackee.record('adf384d5-589a-46ae-abdf-8e7958db6565')
      }
    })
    return () => {
      router.events.off('routeChangeComplete')
    }
  }, [])

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteTitle} />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Main>
          <Header />
          <Content>
            <Component {...pageProps} />
          </Content>
          <Footer />
        </Main>
      </ThemeProvider>
    </>
  )
}
