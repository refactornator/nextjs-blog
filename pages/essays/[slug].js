import React, { useMemo } from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import MuxPlayer from '@mux/mux-player-react'
import { getMDXComponent } from 'mdx-bundler/client'

import FrontMatter from '../../components/FrontMatter'

import { getEssayData, getAllEssays } from '../../lib/essays'

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  flex-direction: column;

  @media (min-width: 64em) {
    flex-direction: row;
  }
`

const Content = styled.article`
  margin: 0 auto;
  font-size: 20px;
  line-height: 28px;

  @media (min-width: 48em) {
    width: 100%;
  }

  @media (min-width: 62em) {
    width: 680px;
  }

  > *,
  section > * {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  p {
    margin-block-start: 1em;
    margin-block-end: 1em;
  }

  ul {
    padding-inline-start: 40px;
  }

  h1 {
    font-weight: bold;
    font-size: 2.25rem;
  }

  h2 {
    font-weight: bold;
    font-size: 1.875rem;
  }

  h3 {
    font-weight: bold;
    font-size: 1.17rem;
  }

  blockquote {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    margin-inline-end: 40px;
  }
`

export default function Essay({ code, frontmatter: { date, title } }) {
  const MDXComponent = useMemo(() => getMDXComponent(code), [code])

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <FrontMatter date={date} title={title} />
        <Content>
          <MDXComponent
            components={{
              MuxPlayer: (props) => (
                <MuxPlayer streamType="on-demand" {...props} />
              ),
            }}
          />
        </Content>
      </Container>
    </>
  )
}

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
