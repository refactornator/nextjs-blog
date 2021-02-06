import Head from 'next/head'
import styled from 'styled-components'

import Date from '../../components/Date'
import Layout from '../../components/Layout'

import { getAllPostIds, getPostData } from '../../lib/posts'

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
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <Title>{postData.title}</Title>
        <LightText>
          <Date dateString={postData.date} />
        </LightText>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}
