import './styles.css'

import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import { ChakraProvider, Image, Flex } from '@chakra-ui/react'

import theme from '../utils/theme'
import * as gtag from '../lib/gtag'

import Header from '../components/Header'
import Footer from '../components/Footer'

import gradientMesh from '../public/images/gradient-mesh.png'
import useWindowDimensions from '../hooks/useWindowDimensions'

export const siteTitle = "Liam Lindner's Blog, 2 n's"

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const { width: windowWidth } = useWindowDimensions()

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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ME24SJN4RE"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ME24SJN4RE');
        `}
      </Script>
      <ChakraProvider theme={theme}>
        <motion.div
          key={router.route}
          initial="initial"
          animate="animate"
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
            },
          }}
        >
          <Image
            top={0}
            alt="gradient mesh cloud"
            right={router.route.startsWith('/essays') ? '75%' : 0}
            height="100%"
            minWidth="600px"
            minHeight="720px"
            marginTop="64px"
            maxHeight={windowWidth <= 740 ? 820 : 720}
            position="absolute"
            zIndex={0}
            src={gradientMesh.src}
          />
        </motion.div>
        <Flex height="100%" direction="column" backgroundColor="#333">
          <Header />
          <Flex flex="1 0 auto" zIndex={1} marginY="64px" overflowY="scroll">
            <Component {...pageProps} />
          </Flex>
          <Footer />
        </Flex>
      </ChakraProvider>
    </>
  )
}
