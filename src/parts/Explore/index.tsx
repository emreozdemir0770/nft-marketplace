import tw, { css, styled } from "twin.macro";

const ExploreContainer = styled.div(() => [
  tw`flex flex-col `,
  css`
    h1 {
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      color: white;
    }
  `,
]);

function Explore() {
  return (
    <ExploreContainer>
      <h1>Explore</h1>
    </ExploreContainer>
  );
}

export default Explore;
