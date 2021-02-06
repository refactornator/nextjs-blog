import Head from 'next/head'
import styled from 'styled-components'

import Date from '../../components/Date'
import Layout from '../../components/Layout'

import { getAllEssayIds, getEssayData } from '../../lib/essays'

const Title = styled.h1`
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`

const LightText = styled.div`
  color: #999;
`

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
        <Title>{essayData.title}</Title>
        <LightText>
          <Date dateString={essayData.date} />
        </LightText>
        <div dangerouslySetInnerHTML={{ __html: essayData.contentHtml }} />
      </article>
    </Layout>
  )
}
