import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  height: 300px;
  width: 500px;
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Btn = styled.button`
  color: ${(props) => props.theme.btnColor};
`;

function App() {
  const [username, setUsername] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setUsername(value);
  };
  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`submit ${username}`);
  };

  return (
    <Wrapper>
      <H1>
        hwll
      </H1>
      <form onSubmit={onSubmit}>
        <input value={username} onChange={onChange} type="text" placeholder="username" />
        <Btn>Log in</Btn>
      </form>
    </Wrapper>
  )
}

export default App;
