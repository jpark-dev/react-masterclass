import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const animation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform:rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform:rotate(0deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 50px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${animation} 3s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  ${Emoji} {
    &:hover {
      font-size: 150px;
    }
  }
`;


function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😍</Emoji>
      </Box>
    </Wrapper>
  )
}

export default App;
