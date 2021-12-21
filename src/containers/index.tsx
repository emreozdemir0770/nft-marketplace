import Sidebar from "../parts/Sidebar";
import Navigationbar from "../parts/Navigationbar";
import tw, { styled, css } from "twin.macro";

const Main = styled.div(tw`px-5`);

function Container({ children }: { children: JSX.Element }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar isExpand={false} />
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Navigationbar />
        <Main>{children}</Main>
      </div>
    </div>
  );
}

export default Container;
