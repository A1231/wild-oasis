import styled from "styled-components";
const H1 = styled.h1`
  font-size: 30 px;
  font-weight: 600;
  background-color: red;
`; //creates a randomly named class and applies to the element
//scoped only to this componenet

const Button = styled.button`
  background-color: purple;
  padding: 1.2 rem 1.6 rem;
  color: white;
  font-size: 1.4rem;
  cursor: pointer;
  margin: 20px;
`;
const Input = styled.input`
  border: 1px solid gray;
  border-radius: 4px;
  padding: 0.8rem 1.2rem;
  font-size: 1.4rem;
`;

//styling the component itself conventionally named StyledComponentName
const StyledApp = styled.div`
  background-color: lightgray;
  padding: 20px;
`;
function App() {
  return (
    <StyledApp>
      <H1>Wild Oasis</H1>
      <Button onClick={() => alert("Check in ")}>Check In</Button>
      {/* don't need t create a React component and manually pass to an HTMl element*/}
      <Input placeholder="Number of guests" type="number" />
    </StyledApp>
  );
}

export default App;
