import { useState } from 'react'
import { Button, Container, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'

import Layout from '../components/Layout'
import MessageDialog from '../components/MessageDialog'

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleOpen = () => {
    setDialogOpen(true)
  }

  const handleClose = () => {
    setDialogOpen(false)
  }

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
          <b>Oppose fundamentalism.</b> There is no one right way, and the way
          will always change.
        </Text>
        <Text size="lg" my="10px">
          <b>Social connection is as important as food and water.</b>{' '}
          Communities must foster vulnerable honesty to survive.
        </Text>
        <Text size="lg" my="10px">
          <b>Our bodies are our own and we need not be ashamed of them.</b>{' '}
          Staying mindful of how we treat our bodies is a necessary foundation
          for our lives.
        </Text>
        <Text size="lg" my="10px">
          <b>Attention is our scarcest resource.</b> Meditation creates
          attention that is necessary to live in a hectic world.
        </Text>
        <Text size="lg" my="10px">
          <b>The past is a teacher and we must honor her to move forward.</b> In
          order to know what is right, we must listen to others that we affect
          with our choices. This means honoring those that came before us, and
          staying mindful of those to come.
        </Text>
        <Text size="lg" my="10px">
          <b>Don’t take yourself too seriously.</b> Life requires fun. Easy is
          right. Every moment is an opportunity for death to the old self and a
          chance to be born again.
        </Text>
        <Text size="lg" my="10px">
          Check out my{' '}
          <Link href="/essays">
            <a>essays</a>
          </Link>
          .
        </Text>
        <Button
          colorScheme="blue"
          variant="link"
          onClick={handleOpen}
          my="10px"
        >
          Tell me what you think
        </Button>
      </Container>
      <MessageDialog onClose={handleClose} open={dialogOpen} />
    </Layout>
  )
}
