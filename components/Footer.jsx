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

const ExternalLink = styled.a`
  color: white;
`

export default function Footer() {
  return (
    <Container>
      <ExternalLink href="https://linkedin.com/in/wlindner" target="_blank">
        Linkedin
      </ExternalLink>
    </Container>
  )
}
