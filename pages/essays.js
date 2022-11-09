import Link from 'next/link'
import styled from '@emotion/styled'

import { ShortHeading } from '../components/common/Headings'

import { getAllEssays } from '../lib/essays'

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  flex-direction: column;

  @media (min-width: 48em) {
    flex-direction: row;
  }
`

const BoldLink = styled(Link)`
  font-weight: 500;
  line-height: 19px;
`

const ListItem = styled.li`
  margin-bottom: 32px;
`

const List = styled.ul`
  max-width: 320px;
  list-style-type: none;

  @media (min-width: 30em) {
    margin-top: 22px;
    margin-left: 22px;
  }

  @media (min-width: 48em) {
    margin-top: 44px;
    margin-left: 44px;
  }

  @media (min-width: 62em) {
    margin-top: 66px;
    margin-left: 66px;
  }
`

export default function Essays({ allEssaysData }) {
  return (
    <Container>
      <ShortHeading>Essays</ShortHeading>
      <List>
        {allEssaysData.map(({ slug, frontmatter }) => (
          <ListItem key={slug}>
            <BoldLink href={`/essays/${slug}`}>{frontmatter.title} →</BoldLink>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export async function getStaticProps() {
  const allEssaysData = getAllEssays()
  return {
    props: {
      allEssaysData,
    },
  }
}
