import tw, { styled, css } from "twin.macro";
import { Data } from "./Content";
import Artist from "./Artist";

const TopArtistContainer = styled.div(() => [
  tw`px-4 py-6 m-6 rounded-xl bg-black-background-sidebar gap-y-6 flex flex-col justify-center flex-shrink-0`,
  css`
    width: 375px;
    h1 {
      color: #fff;
      background: none;
      outline: none;
      font-size: 20px;
      font-weight: 500;
    }
  `,
]);

function TopArtist() {
  return (
    <TopArtistContainer>
      <h1>Top Artist</h1>
      {Data &&
        Data.map((item, index) => {
          return <Artist {...item} num={index} key={index} />;
        })}
    </TopArtistContainer>
  );
}

export default TopArtist;
