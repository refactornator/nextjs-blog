import React from 'react'
import Head from 'next/head'
import { Box, Heading, Text, Flex, Wrap, WrapItem } from '@chakra-ui/react'
import { getMDXComponent } from 'mdx-bundler/client'

import Date from '../../components/Date'

import { getSingleEssay, getAllEssays } from '../../lib/essays'

import styles from './mdx.module.css'

export const getStaticProps = async ({ params }) => {
  const post = await getSingleEssay(params.slug)
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
  const Component = React.useMemo(() => getMDXComponent(code), [code])
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <Flex padding="20px">
        <Wrap>
          <WrapItem>
            <Flex direction="column">
              <Text color="white">
                <Date dateString={frontmatter.date} />
              </Text>
              <Heading
                maxWidth={['100%', '460px', '680px']}
                fontSize={['36px', '66px', '96px']}
                lineHeight={['36px', '66px', '96px']}
                color="white"
                fontFamily="ivypresto-display, serif"
              >
                {frontmatter.title}
              </Heading>
            </Flex>
          </WrapItem>
          <WrapItem>
            <Box
              maxWidth={['100%', '680px']}
              mt="44px"
              as="article"
              color="white"
              fontSize="20px"
              lineHeight="28px"
              className={styles.container}
            >
              <Component />
            </Box>
          </WrapItem>
        </Wrap>
      </Flex>
    </>
  )
}

export default Essay
