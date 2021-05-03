import '@fontsource/ubuntu/300.css'
import '@fontsource/ubuntu/400.css'
import '@fontsource/ubuntu/500.css'
import '@fontsource/ubuntu/700.css'

import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as ackeeTracker from 'ackee-tracker'

import { Flex } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../utils/theme'

import Footer from '../components/Footer'
import Header from '../components/Header'

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
      <ChakraProvider theme={theme}>
        <Flex minH="100%" direction="column">
          <Header />
          <Flex marginTop="120px" flex="1 0 auto">
            <Component {...pageProps} />
          </Flex>
          <Footer />
        </Flex>
      </ChakraProvider>
    </>
  )
}
