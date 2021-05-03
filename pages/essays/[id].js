import Head from 'next/head'
import { Box, Heading, Text } from '@chakra-ui/react'

import Date from '../../components/Date'
import Layout from '../../components/Layout'

import { getAllEssayIds, getEssayData } from '../../lib/essays'

import styles from './mdx.module.css'

export async function getStaticProps({ params }) {
  const essayData = await getEssayData(params.id)
  return {
    props: {
      essayData,
    },
  }
}

export async function getStaticPaths() {
  const paths = getAllEssayIds()
  return {
    paths,
    fallback: false,
  }
}

export default function Essay({ essayData }) {
  return (
    <Layout essay>
      <Head>
        <title>{essayData.title}</title>
      </Head>
      <article>
        <Heading my={2} fontWeight="bold">
          {essayData.title}
        </Heading>
        <Text color="#999" my={4}>
          <Date dateString={essayData.date} />
        </Text>
        <Box
          className={styles.container}
          dangerouslySetInnerHTML={{ __html: essayData.contentHtml }}
        />
      </article>
    </Layout>
  )
}
