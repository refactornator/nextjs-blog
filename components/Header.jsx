import Link from 'next/link'
import styled from '@emotion/styled'

const Flex = styled.div`
  top: 0;
  width: 100%;
  display: flex;
  padding: 20px;
  position: fixed;
  z-index: 100;
  background-color: #333;
  justify-content: space-between;
`

const Name = styled.div`
  width: 100%;
`

const Menu = styled.div`
  width: 100%;
  gap: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 40px;

  a {
    display: block;
  }
`

export default function Header() {
  const today = new Date()
  const year = today.getFullYear()

  return (
    <Flex>
      <Name>
        <Link href="/">
          <b>Liam Lindner</b> © {year}
        </Link>
      </Name>
      <Menu>
        <Link href="/topics">Topics</Link>
        <a href="https://github.com/refactornator" target="_blank">
          Github
        </a>
        <a href="https://linkedin.com/in/liam-lindner" target="_blank">
          Linkedin
        </a>
      </Menu>
    </Flex>
  )
}
