import styled from '@emotion/styled'

const Container = styled.div`
  flex: 0 0 auto;
  width: 100%;
  padding: 20px;
  z-index: 100;
  position: fixed;
  bottom: 0;
  background-color: #333;
`

export default function Footer() {
  return (
    <Container>
      <a
        href="https://linkedin.com/in/wlindner"
        target="_blank"
        rel="noreferrer"
      >
        Linkedin
      </a>
    </Container>
  )
}
