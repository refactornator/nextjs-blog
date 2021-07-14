import Link from 'next/link'
import { Container, Flex } from '@chakra-ui/react'

import LikeButton from './LikeButton'

export default function Layout({ children, essay }) {
  return (
    <Container maxW="container.md" paddingX="8px">
      <main>{children}</main>
      {essay && (
        <>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            margin="3rem 0 0"
          >
            <Link href="/">
              <a>← Back to home</a>
            </Link>
            <LikeButton />
          </Flex>
        </>
      )}
    </Container>
  )
}
