import Image from 'next/image'
import styled from '@emotion/styled'

import { ShortHeading } from '../components/common/Headings'

import profilePic from '../public/images/garden-headshot.jpg'

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: center;
`

const Center = styled.div`
  margin: 26px 0;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export default function Index() {
  return (
    <Container>
      <Center>
        <ShortHeading>Liam</ShortHeading>
        <Image
          priority
          src={profilePic}
          alt="Picture of the author"
          width={260}
          height={260}
        />
      </Center>
    </Container>
  )
}
