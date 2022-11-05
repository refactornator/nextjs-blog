import styled from '@emotion/styled'
import MuxPlayer from '@mux/mux-player-react'

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  width: 100%;
`

const Heading = styled.div`
  color: #ec5252;
  margin: 42px 0;
  font-size: 42px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 800;
`

export default function Custom404() {
  return (
    <Container>
      <Center>
        <Heading>404: Page Not Found</Heading>
      </Center>

      <MuxPlayer
        loop
        autoPlay="muted"
        streamType="on-demand"
        playbackId="bWRXSnGF00Q006Zty023SHQqdA7Zd5FIb02O3600q01yoO6lo"
        metadataVideoTitle="404-confetti"
      />
    </Container>
  )
}
