import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
const H1 = styled.h1`
  font-size: 30 px;
  font-weight: 600;
  background-color: red;
`; //creates a randomly named class and applies to the element
//scoped only to this componenet

//styling the component itself conventionally named StyledComponentName
const StyledApp = styled.div`
  background-color: lightgray;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Wild Oasis</H1>
        <Button onClick={() => alert("Check in ")}>Check In</Button>
        {/* don't need t create a React component and manually pass to an HTMl element*/}
        <Input placeholder="Number of guests" type="number" />
      </StyledApp>
    </>
  );
}

export default App;
