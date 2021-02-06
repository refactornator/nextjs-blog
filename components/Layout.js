import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 840px;
  margin: 40px auto;
`

const BackToHome = styled.div`
  margin: 3rem 0 0;
`

export default function Layout({ children, home }) {
  return (
    <Container>
      <main>{children}</main>
      {!home && (
        <BackToHome>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </BackToHome>
      )}
    </Container>
  )
}
