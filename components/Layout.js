import Link from 'next/link'
import { Container, Flex } from '@chakra-ui/react'

export default function Layout({ children, essay }) {
  return (
    <Container maxW="container.md" paddingX="8px">
      <main>{children}</main>
      {essay && (
        <>
          <Flex alignItems="center" justifyContent="space-between" my="3rem">
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </Flex>
        </>
      )}
    </Container>
  )
}
