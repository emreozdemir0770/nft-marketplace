import Container from "./containers";
import Banner from "./parts/Banner";
import Explore from "./parts/Explore";
function App() {
  return (
    <Container>
      <>
        <Banner />
        <Explore />
      </>
    </Container>
  );
}

export default App;
