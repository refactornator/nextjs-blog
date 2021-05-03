import { useState } from 'react'
import {
  Button,
  Container,
  Heading,
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react'
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
          Welcome to William's website.
        </Heading>
        <Heading as="h5" size="sm" my="10px">
          A place to share my thoughts.
        </Heading>
        <Text size="lg" my="10px">
          I live in{' '}
          <Link href="/essays/moving-to-san-francisco">
            <a>San Francisco</a>
          </Link>
          . I really enjoy{' '}
          <Link href="/essays/holotropic-breathwork">
            <a>Holotropic Breathwork</a>
          </Link>
          , Improv, and{' '}
          <Link href="/essays/lessons-learned-kickboxing">
            <a>Kickboxing</a>
          </Link>
          . I do software consulting at{' '}
          <Link href="/essays/my-first-two-years-at-pivotal">
            <a>VMware Tanzu Labs</a>
          </Link>
          . One time I{' '}
          <Link href="/essays/learning-elixir">
            <a>learned Elixir</a>
          </Link>
          . I sometimes write code on{' '}
          <ChakraLink href="https://github.com/williamdotcool" isExternal>
            Github
          </ChakraLink>
          .
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
