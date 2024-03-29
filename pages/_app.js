import Head from 'next/head'
import Image from 'next/image'
import localFont from 'next/font/local'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'

import Header from '../components/Header'

import gradientMesh from '../public/images/gradient-mesh.png'

export const siteTitle = "Liam Lindner's Blog, 2 n's"

const neueHaasDisplayProFont = localFont({
  src: '../fonts/NeueHaasDisplayPro-Medium.woff',
})

const Page = styled.main`
  color: white;
  display: flex;
  height: 100%;
  flex-direction: column;
  font-family: ${neueHaasDisplayProFont.style.fontFamily};

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
`

const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  z-index: 1;
  margin: 64px 0;
`

const BackgroundImage = styled(Image)`
  top: 0;
  right: ${({ offset }) => (offset ? '75%' : 0)};
  width: auto;
  height: 100%;
  margin-top: 64px;
  min-width: 600px;
  max-height: calc(100% - 64px);
  position: absolute;
  z-index: 0;
`

export default function App({ Component, pageProps }) {
  const { route } = useRouter()

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteTitle} />
      </Head>
      <motion.div
        key={route}
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
          offset={route.startsWith('/topic') ? true : undefined}
          alt="gradient mesh cloud"
          src={gradientMesh}
        />
      </motion.div>
      <Page>
        <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
      </Page>
      <Analytics />
    </>
  )
}
