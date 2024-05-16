import styled from "styled-components";
import Carousel from "./components/Carousel";

function App() {
  return (
    <Container>
      <Carousel />
    </Container>
  );
}

const Container = styled.div`
  padding: auto 50px;
`;
export default App;
