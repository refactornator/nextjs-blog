import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import localFont from '@next/font/local'
import styled from '@emotion/styled'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import * as gtag from '../lib/gtag'

import Header from '../components/Header'
import Footer from '../components/Footer'

import gradientMesh from '../public/images/gradient-mesh.png'
import { css, Global } from '@emotion/react'

export const siteTitle = "Liam Lindner's Blog, 2 n's"

const neueHaasDisplayProFont = localFont({
  src: '../fonts/NeueHaasDisplayPro-Medium.woff',
})

const Page = styled.main`
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: #333;
`

const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  z-index: 1;
  margin: 64px 0;
`

const BackgroundImage = styled(Image)`
  top: 0;
  right: ${({ offset }) => (offset === 'true' ? '75%' : 0)};
  width: auto;
  height: 100%;
  margin-top: 64px;
  min-width: 600px;
  min-height: 720px;
  position: absolute;
  z-index: 0;

  max-height: 720px;
  @media (min-width: 48em) {
    max-height: 820px;
  }
`

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
      <Global
        styles={css`
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
        `}
      ></Global>
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
        <BackgroundImage
          priority
          offset={router.route.startsWith('/essays').toString()}
          alt="gradient mesh cloud"
          src={gradientMesh}
        />
      </motion.div>
      <Page className={neueHaasDisplayProFont.className}>
        <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
        <Footer />
      </Page>
    </>
  )
}
