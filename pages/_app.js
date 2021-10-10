import './styles.css'

import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { ChakraProvider, Image, Flex } from '@chakra-ui/react'

import theme from '../utils/theme'
import * as gtag from '../lib/gtag'

import Header from '../components/Header'
import Footer from '../components/Footer'

import gradientMesh from '../public/images/gradient-mesh.png'

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
        <Image
          top={0}
          right={0}
          width="80%"
          height="100%"
          position="absolute"
          zIndex={0}
          src={gradientMesh.src}
        />
        <Flex minH="100%" direction="column" backgroundColor="#333">
          <Header />
          <Flex flex="1 0 auto" zIndex={1}>
            <Component {...pageProps} />
          </Flex>
          <Footer />
        </Flex>
      </ChakraProvider>
    </>
  )
}
