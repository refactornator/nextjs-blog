import React from 'react'
import styled from '@emotion/styled'

import Date from './Date'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const FrontMatter = ({ date, title }) => {
  return (
    <Container>
      <Date dateString={date} />
      <h1>{title}</h1>
    </Container>
  )
}

export default FrontMatter
