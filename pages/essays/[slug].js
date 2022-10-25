import React, { useMemo } from 'react'
import Head from 'next/head'
import MuxPlayer from '@mux/mux-player-react'
import { getMDXComponent } from 'mdx-bundler/client'
import { useBreakpointValue, Box, Flex, Wrap, WrapItem } from '@chakra-ui/react'

import FrontMatter from '../../components/FrontMatter'

import { getEssayData, getAllEssays } from '../../lib/essays'

import styles from './mdx.module.css'

export const getStaticProps = async ({ params }) => {
  const post = await getEssayData(params.slug)
  return {
    props: { ...post },
  }
}

export const getStaticPaths = async () => {
  const paths = getAllEssays().map(({ slug }) => ({ params: { slug } }))
  return {
    paths,
    fallback: false,
  }
}

const Essay = ({ code, frontmatter }) => {
  const Component = useMemo(() => getMDXComponent(code), [code])
  const contentWidth = useBreakpointValue({
    md: '100%',
    lg: '680px',
  })

  const { date, title } = frontmatter

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Flex px="20px" py="10px">
        <Wrap>
          <WrapItem>
            <FrontMatter date={date} title={title} />
          </WrapItem>
          <WrapItem>
            <Box
              maxWidth={contentWidth}
              mt="20px"
              as="article"
              color="white"
              fontSize="20px"
              lineHeight="28px"
              className={styles.container}
            >
              <Component components={{
                MuxPlayer
              }} />
            </Box>
          </WrapItem>
        </Wrap>
      </Flex>
    </>
  )
}

export default Essay
