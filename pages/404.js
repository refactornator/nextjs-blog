import styled from "styled-components";

const Main = styled.h1`
  font-family: courier;
  text-align: center;
  font-size: 64px;
  font-style: bold;
`;

export default function Custom404() {
  return <Main>404: Page Not Found</Main>;
}
