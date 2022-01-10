import React from 'react'
import Head from 'next/head'
import { Box, Heading, Text, Flex, Wrap, WrapItem } from '@chakra-ui/react'

import Date from '../../components/Date'

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

const Essay = ({ contentHtml, title, date }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Flex px="20px" py="10px">
        <Wrap>
          <WrapItem>
            <Flex direction="column">
              <Text color="white">
                <Date dateString={date} />
              </Text>
              <Heading
                maxWidth={['100%', '460px', '680px']}
                fontSize={['36px', '66px', '96px']}
                lineHeight={['36px', '66px', '96px']}
                color="white"
                fontFamily="ivypresto-display, serif"
              >
                {title}
              </Heading>
            </Flex>
          </WrapItem>
          <WrapItem>
            <Box
              maxWidth={['100%', '680px']}
              mt="20px"
              as="article"
              color="white"
              fontSize="20px"
              lineHeight="28px"
              className={styles.container}
            >
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </Box>
          </WrapItem>
        </Wrap>
      </Flex>
    </>
  )
}

export default Essay
