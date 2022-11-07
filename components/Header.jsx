import Link from 'next/link'
import styled from '@emotion/styled'

const Container = styled.div`
  top: 0;
  width: 100%;
  display: flex;
  padding: 20px;
  position: fixed;
  z-index: 100;
  background-color: #333;
  justify-content: space-between;
`

const ExternalLink = styled.a`
  margin-left: 32px;
  margin-right: 42px;
`

export default function Header() {
  const today = new Date()
  const year = today.getFullYear()

  return (
    <Container>
      <div>
        <Link href="/">
          <b>Liam Lindner</b> © {year}
        </Link>
      </div>
      <div>
        <Link href="/essays">Essays</Link>
        <ExternalLink href="https://github.com/refactornator" target="_blank">
          Github
        </ExternalLink>
      </div>
    </Container>
  )
}
