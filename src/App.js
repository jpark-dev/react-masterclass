import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const Box = styled.div`
  height: 200px;
  weight: 200px;
  background-color: tomato;
`;

function App() {
  return (
    <Wrapper>
      <Box />
    </Wrapper>
  )
}

export default App;
