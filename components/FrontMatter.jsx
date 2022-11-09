import React from 'react'
import styled from '@emotion/styled'

import Date from './Date'
import { LongHeading } from './common/Headings'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const FrontMatter = ({ date, title }) => {
  return (
    <Container>
      <Date dateString={date} />
      <LongHeading>{title}</LongHeading>
    </Container>
  )
}

export default FrontMatter
