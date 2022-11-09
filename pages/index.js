import Image from 'next/image'
import styled from '@emotion/styled'

import Tao from '../components/Tao'
import { ShortHeading } from '../components/common/Headings'

import profilePic from '../public/images/garden-headshot.jpg'

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: center;
`

const GrowBox = styled.div`
  flex-grow: 1;
`

const IntroArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: 30em) {
    width: 100%;
    max-width: 260px;
  }

  @media (min-width: 48em) {
    max-width: 520px;
  }
`

const Center = styled.div`
  margin: 26px 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Index() {
  return (
    <Container>
      <IntroArea>
        <ShortHeading>The Tao of Liam.</ShortHeading>
        <Center>
          <Image
            priority
            src={profilePic}
            alt="Picture of the author"
            width={260}
            height={260}
          />
        </Center>
      </IntroArea>
      <GrowBox>
        <Tao />
      </GrowBox>
    </Container>
  )
}
