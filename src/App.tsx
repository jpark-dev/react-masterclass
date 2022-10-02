import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor}
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

const Text = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Text>Welcome</Text>
        <Emoji>😍</Emoji>
      </Box>
    </Wrapper>
  )
}

export default App;
