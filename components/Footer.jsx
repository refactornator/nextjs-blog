import styled from '@emotion/styled'

const Container = styled.div`
  bottom: 0;
  width: 100%;
  flex: 0 0 auto;
  padding: 20px;
  z-index: 100;
  position: fixed;
  background-color: #333;
`

export default function Footer() {
  return (
    <Container>
      <a
        href="https://linkedin.com/in/liam-lindner"
        target="_blank"
        rel="noreferrer"
      >
        Linkedin
      </a>
    </Container>
  )
}
