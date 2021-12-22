import Banner from "./parts/Banner";
import Explore from "./parts/Explore";
import TopArtist from "./parts/TopArtist";
import RecentActivity from "./parts/RecentActivity";
import Navigationbar from "./parts/Navigationbar";
import Sidebar from "./parts/Sidebar";

import tw, { styled, css } from "twin.macro";

const MainWrapper = styled.div(() => [
  tw`flex flex-col lg:flex-row sm:w-full w-screen`,
  css`
    padding: 0 1.5rem;
  `,
]);

const ContentWrapper = styled.div(() => [tw`pr-0 sm:pr-4`]);

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar isExpand={false} />
      <div style={{ display: "flex", flex: "1 1 0%", flexDirection: "column" }}>
        <Navigationbar />
        <MainWrapper>
          <ContentWrapper className="flex flex-col">
            <Banner />
            <Explore />
          </ContentWrapper>
          <ContentWrapper className="flex flex-col w-full lg:w-screen flex-shrink-0">
            <TopArtist />
            <RecentActivity />
          </ContentWrapper>
        </MainWrapper>
      </div>
    </div>
  );
}

export default App;
