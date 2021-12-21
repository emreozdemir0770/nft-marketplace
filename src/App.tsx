import Container from "./containers";
import Banner from "./parts/Banner";
import Explore from "./parts/Explore";
import TopArtist from "./parts/TopArtist";
import RecentActivity from "./parts/RecentActivity";
function App() {
  return (
    <Container>
      <>
        <div className="flex flex-col">
          <Banner />
          <Explore />
        </div>
        <div className="flex flex-col flex-shrink-0">
          <TopArtist />
          <RecentActivity />
        </div>
      </>
    </Container>
  );
}

export default App;
