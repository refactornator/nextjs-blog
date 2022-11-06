import React from 'react'
import styled from '@emotion/styled'

import Date from './Date'

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-family: ivypresto-display, serif;

  @media (min-width: 30em) {
    font-size: 54px;
  }

  @media (min-width: 48em) {
    width: 100%;
    font-size: 74px;
  }

  @media (min-width: 62em) {
    width: 580px;
  }
`

const FrontMatter = ({ date, title }) => {
  return (
    <Container>
      <Date dateString={date} />
      <Title>{title}</Title>
    </Container>
  )
}

export default FrontMatter
