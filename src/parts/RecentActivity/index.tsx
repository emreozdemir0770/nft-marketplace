import tw, { styled, css } from "twin.macro";
import { Data } from "./Content";
import Artist from "./CardActivity";

const RecentActivityContainer = styled.div(() => [
  tw`px-4 py-6 m-6 rounded-xl w-full mx-auto bg-black-background-sidebar gap-y-4 flex flex-col justify-center flex-shrink-0`,
  css`
    min-width: 325px;
    h1 {
      color: #fff;
      background: none;
      outline: none;
      font-size: 20px;
      font-weight: 500;
    }
    @media (min-width: 1024px) {
      min-width: 375px;
    }
  `,
]);

function RecentActivity() {
  return (
    <RecentActivityContainer>
      <h1>Recent Activity</h1>
      {Data &&
        Data.map((item, index) => {
          return <Artist {...item} key={index} />;
        })}
    </RecentActivityContainer>
  );
}

export default RecentActivity;
