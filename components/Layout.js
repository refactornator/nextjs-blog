import Link from 'next/link'
import styled from 'styled-components'

import LikeButton from './LikeButton'

const Container = styled.div`
  max-width: 840px;
  margin: 14px auto;
  padding: 0 8px;
`

const EssayFooter = styled.div`
  margin: 3rem 0 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default function Layout({ children, essay }) {
  return (
    <Container>
      <main>{children}</main>
      {essay && (
        <>
          <EssayFooter>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
            <LikeButton />
          </EssayFooter>
        </>
      )}
    </Container>
  )
}
