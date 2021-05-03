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

import { getSortedEssayData } from '../lib/essays'

export default function Essays({ allEssaysData }) {
  return (
    <Layout>
      <Container>
        <Heading my={2} fontWeight="bold">
          Essays
        </Heading>
        <List>
          {allEssaysData.map(({ id, date, title }) => (
            <ListItem key={id} my={3}>
              <Link href={`/essays/${id}`}>
                <ChakraLink fontSize="2xl" color="blue">
                  {title}
                </ChakraLink>
              </Link>
              <br />
              <Text color="#999">
                <Date dateString={date} />
              </Text>
            </ListItem>
          ))}
        </List>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const allEssaysData = getSortedEssayData()
  return {
    props: {
      allEssaysData,
    },
  }
}
