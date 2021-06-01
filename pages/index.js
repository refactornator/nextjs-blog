import { Container, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'

import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Container>
        <Heading as="h3" size="lg" my="10px">
          The Tao of William
        </Heading>
        <Heading as="h5" size="sm" my="10px">
          <Heading as="span" size="md" my="10px">
            Tao{' '}
          </Heading>
          <i>/dou,tou/</i> - the way or path
        </Heading>
        <Text size="lg" my="10px">
          <b>Question dogma.</b> There is no one right way, and the way will
          always change.
        </Text>
        <Text size="lg" my="10px">
          <b>Social connection is essential.</b> We need people and we need
          communities that foster vulnerable honesty.
        </Text>
        <Text size="lg" my="10px">
          <b>Celebrate your body!</b> We only get one, take care of it and use
          it to uplift yourself and others.
        </Text>
        <Text size="lg" my="10px">
          <b>Attention is our scarcest resource.</b> Meditation creates
          attention that is necessary to live in a distracting world.
        </Text>
        <Text size="lg" my="10px">
          <b>Learn from the past.</b> Listen to others to learn right from
          wrong. Over time we can honor those that came before us, and consider
          those to come.
        </Text>
        <Text size="lg" my="10px">
          <b>Don’t take yourself too seriously.</b> Life requires fun. Every
          moment is an opportunity to be born again.
        </Text>
        <Text size="lg" my="10px">
          Check out my{' '}
          <Link href="/essays">
            <a>essays</a>
          </Link>
          .
        </Text>
      </Container>
    </Layout>
  )
}
