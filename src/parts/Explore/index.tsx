import tw, { css, styled } from "twin.macro";
import ButtonCategory from "../../components/CategoryButton";
import Content, { DataExplore } from "./ButtonList";
import Card from "../../components/Card";
// import { useEffect, useState, useCallback } from "react";
// import { CallExploreData, ExploreDataProps } from "../../lib/apiCall";

const ExploreContainer = styled.div(() => [
  tw`flex flex-col gap-y-4 max-w-screen-sm sm:max-w-full overflow-x-hidden rounded-xl`,
  css`
    h1 {
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      color: white;
    }
  `,
]);

const ExploreCategory = styled.div(
  tw`inline-flex flex-row sm:flex-wrap overflow-x-auto justify-start pb-4`
);
const ExploreContent = styled.div(() => [
  tw`inline-flex flex-row sm:grid grid-cols-4 overflow-x-auto justify-start px-2 gap-4 pb-4`,
  css`
    grid-template-columns: repeat(2, minmax(0, 1fr));
    @media (min-width: 1024px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    @media (min-width: 1080px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (min-width: 1440px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media (min-width: 1660px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    @media (min-width: 1880px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  `,
]);

function Explore() {
  return (
    <ExploreContainer>
      <h1>Explore</h1>
      <ExploreCategory>
        {Content &&
          Content.map((item, index) => {
            return (
              <li key={index}>
                <ButtonCategory {...item} />
              </li>
            );
          })}
      </ExploreCategory>
      <ExploreContent>
        {DataExplore &&
          DataExplore.map((item, index) => {
            return (
              <li key={index}>
                <Card {...item} category="Art" />
              </li>
            );
          })}
      </ExploreContent>
    </ExploreContainer>
  );
}

export default Explore;
