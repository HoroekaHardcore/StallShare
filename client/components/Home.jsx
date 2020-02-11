import React from "react";
import Theme from "./Theme";
import styled from "styled-components";

/*
The below is for reference on how to use styled components

const Container = styled.div`
  width: 100%;
  border: ${props => `1px solid ${props.theme.colors.onyx}`};
  background-color: ${props => props.theme.colors.lightBlue};
  font-family: ${props => props.theme.fonts[0]};
`;

const Heading = styled.h1`
  font-size: ${({ isHeading, theme: { fontSizes } }) =>
    isHeading ? fontSizes.large : fontSizes.small};
  color: ${({ theme: { colors } }) => colors.persianGreen};
`;
*/

const Home = () => {
  return (
    <Theme>
      <Container>
        <Heading isHeading={true}>StallShare</Heading>
        <h2>What's on your community stall?</h2>
      </Container>
    </Theme>
  );
};
export default Home;