import Link from 'next/link'
import {
  Flex,
  Heading,
  Link as ChakraLink,
  List,
  ListItem,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'

import { getAllEssays } from '../lib/essays'

export default function Essays({ allEssaysData }) {
  return (
    <Flex padding="20px">
      <Wrap>
        <WrapItem>
          <Heading
            w={['100%', '680px']}
            maxWidth={['100%', '680px']}
            fontSize={['50px', '100px', '200px']}
            lineHeight={['50px', '100px', '200px']}
            color="white"
            fontFamily="ivypresto-display, serif"
          >
            Essays
          </Heading>
        </WrapItem>

        <WrapItem>
          <List mt={['22px', '44px', '64px']} maxWidth="320px">
            {allEssaysData.map(({ slug, frontmatter }) => (
              <ListItem key={slug} mb="32px">
                <Link href={`/essays/${slug}`} passHref>
                  <ChakraLink
                    fontWeight="500"
                    fontSize="16px"
                    lineHeight="19px"
                    color="white"
                  >
                    {frontmatter.title} →
                  </ChakraLink>
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
