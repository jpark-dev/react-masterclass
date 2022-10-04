import styled from "styled-components";

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border: solid 1px ${(props) => props.borderColor};
`;


function Circle({ bgColor, borderColor, text="default text" }: CircleProps) {
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
    {text}
  </Container>
};

export default Circle;
