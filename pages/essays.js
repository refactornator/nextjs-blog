import Link from 'next/link'
import styled from 'styled-components'

import Date from '../components/Date'
import Layout from '../components/Layout'

import { getSortedEssayData } from '../lib/essays'

const Container = styled.section`
  font-size: 1.2rem;
  line-height: 1.5;
`

const Heading = styled.h1`
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const ListItem = styled.li`
  margin: 0 0 1.25rem;
`

const LightText = styled.small`
  color: #999;
`

export default function Essays({ allEssaysData }) {
  return (
    <Layout>
      <Container>
        <Heading>Essays</Heading>
        <List>
          {allEssaysData.map(({ id, date, title }) => (
            <ListItem key={id}>
              <Link href={`/essays/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <LightText>
                <Date dateString={date} />
              </LightText>
            </ListItem>
          ))}
        </List>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const allEssaysData = getSortedEssayData()
  return {
    props: {
      allEssaysData,
    },
  }
}
