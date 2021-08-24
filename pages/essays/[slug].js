import React from 'react'
import Head from 'next/head'
import { Box, Heading, Text } from '@chakra-ui/react'
import { getMDXComponent } from 'mdx-bundler/client'

import Date from '../../components/Date'
import Layout from '../../components/Layout'

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
    <Layout essay>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <article>
        <Heading my={2} fontWeight="bold">
          {frontmatter.title}
        </Heading>
        <Text color="#999" my={4}>
          <Date dateString={frontmatter.date} />
        </Text>
        <Box className={styles.container}>
          <Component />
        </Box>
      </article>
    </Layout>
  )
}

export default Essay
