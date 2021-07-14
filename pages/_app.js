import '@fontsource/ubuntu/300.css'
import '@fontsource/ubuntu/400.css'
import '@fontsource/ubuntu/500.css'
import '@fontsource/ubuntu/700.css'

import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { ChakraProvider, Flex } from '@chakra-ui/react'

import theme from '../utils/theme'
import * as gtag from '../lib/gtag'

import Footer from '../components/Footer'
import Header from '../components/Header'

export const siteTitle = "Liam Lindner's Blog, 2 n's"

export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
