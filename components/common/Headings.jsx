import styled from '@emotion/styled'
import localFont from 'next/font/local'

const ivyprestoDisplayFont = localFont({
  src: '../../fonts/ivypresto-display.woff',
})

const BaseHeading = styled.h1`
  width: 100%;
  max-width: 420px;
  margin-block-start: 0;
  margin-block-end: 0;

  font-family: ${ivyprestoDisplayFont.style.fontFamily};
  font-style: normal;
  font-weight: 400;
`

export const ShortHeading = styled(BaseHeading)`
  @media (min-width: 62em) {
    font-size: 5em;
  }

  @media (min-width: 80em) {
    font-size: 6em;
  }
`

export const LongHeading = styled(ShortHeading)`
  @media (min-width: 30em) {
    font-size: 2.75em;
  }

  @media (min-width: 48em) {
    font-size: 3em;
  }
`
