import Link from 'next/link'
import {
  Container,
  Heading,
  Link as ChakraLink,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react'

import Date from '../components/Date'
import Layout from '../components/Layout'

import { getAllEssays } from '../lib/essays'

export default function Essays({ allEssaysData }) {
  return (
    <Layout>
      <Container>
        <Heading my={2} fontWeight="bold">
          Essays
        </Heading>
        <List>
          {allEssaysData.map(({ slug, frontmatter }) => (
            <ListItem key={slug} my={3}>
              <Link href={`/essays/${slug}`}>
                <ChakraLink fontSize="2xl" color="blue">
                  {frontmatter.title}
                </ChakraLink>
              </Link>
              <br />
              <Text color="#999">
                <Date dateString={frontmatter.date} />
              </Text>
            </ListItem>
          ))}
        </List>
      </Container>
    </Layout>
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
