import Link from 'next/link'
import {
  useBreakpointValue,
  Flex,
  List,
  ListItem,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'

import Title from '../components/Title'

import { getAllEssays } from '../lib/essays'

export default function Essays({ allEssaysData }) {
  const essayListMarginTop = useBreakpointValue({
    sm: '22px',
    md: '44px',
    lg: '66px',
  })

  return (
    <Flex padding="20px">
      <Wrap>
        <WrapItem minWidth="320px">
          <Title>Essays</Title>
        </WrapItem>
        <WrapItem>
          <List mt={essayListMarginTop} maxWidth="320px">
            {allEssaysData.map(({ slug, frontmatter }) => (
              <ListItem key={slug} mb="32px">
                <Link
                  href={`/essays/${slug}`}
                  style={{
                    fontWeight: '500',
                    lineHeight: '19px',
                  }}
                >
                  {frontmatter.title} →
                </Link>
              </ListItem>
            ))}
          </List>
        </WrapItem>
      </Wrap>
    </Flex>
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
