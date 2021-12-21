import tw, { css, styled } from "twin.macro";
import ButtonCategory from "../../components/CategoryButton";
import Content, { DataExplore } from "./ButtonList";
import Card from "../../components/Card";
// import { useEffect, useState, useCallback } from "react";
import { CallExploreData, ExploreDataProps } from "../../lib/apiCall";

const ExploreContainer = styled.div(() => [
  tw`flex flex-col gap-y-4`,
  css`
    h1 {
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      color: white;
    }
    #ul-explore-category {
      display: flex;
      margin: 16px 0;
      flex-direction: row;
      li {
        margin-right: 16px;
      }
    }
  `,
]);

const ExploreContent = styled.div(tw`flex flex-wrap justify-start w-full`);

function Explore() {
  // const [data, setData] = useState<ExploreDataProps[] | null>(null);
  // const CallData = useCallback(async () => {
  //   const res = await CallExploreData();
  //   setData(res);
  // }, [CallExploreData]);
  // useEffect(() => {
  //   CallData();
  // }, []);
  return (
    <ExploreContainer>
      <h1>Explore</h1>
      <ul id="ul-explore-category">
        {Content &&
          Content.map((item, index) => {
            return (
              <li key={index}>
                <ButtonCategory {...item} />
              </li>
            );
          })}
      </ul>
      <ExploreContent id="ul-data-category">
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
