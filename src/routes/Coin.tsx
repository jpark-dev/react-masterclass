import { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
interface LocationState {
  state: string;
}

const Container = styled.div`
  padding: 0px 30px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

function Coin() {
  const [loading, setLoading] = useState(true);
  const { state } = useLocation() as LocationState;
  console.log(state);
  return (
    <Container>
      <Header>
        <Title>{state || "Loading"}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader>: null}
    </Container>
  )
}

export default Coin;
