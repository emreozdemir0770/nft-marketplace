import tw, { css, styled } from "twin.macro";
import CardImage from "./CardImage";
import Bidder from "./Bidder";
import { UserBidder } from "../../parts/Explore/ButtonList";

const CardContainer = styled.div(() => [
  tw`p-3 bg-black-background-sidebar w-full mx-2 mb-6 outline-none border-none rounded-xl block max-w-xs`,
  css`
    height: 336px;
    h3 {
      font-weight: 500;
      font-size: 18px;
      color: white;
      background: none;
      outline: none;
      padding-bottom: 16px;
      width: 100%;
      border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    }
  `,
]);

const BidWrapper = styled.div(() => [
  tw`flex flex-row justify-between items-center font-normal text-sm text-white my-4`,
  css`
    #current-bid-value {
      color: #6763fd;
    }
  `,
]);

export interface CardProps {
  createdAt: Date;
  name: string;
  artworksUrl: string;
  currentBid: string;
  bid_starts: Date;
  bid_ends: Date;
  id: string;
  category: string;
}

const BidderWrapper = styled.div(() => [
  tw`flex flex-row justify-start items-center font-normal text-white my-4`,
]);

const LoadMoreBidder = styled.div(
  tw`flex-shrink-0 w-9 h-9 rounded-full bg-purple-background-banner-1 text-white flex items-center justify-center text-center font-normal text-sm`
);

function Card({
  name,
  artworksUrl,
  currentBid,
  bid_ends,
  category,
}: CardProps) {
  return (
    <CardContainer>
      <CardImage
        {...{ name, artworksUrl, currentBid, category }}
        timer={bid_ends}
      />
      <BidWrapper>
        <span>Current Bid : </span>
        <span id="current-bid-value">{currentBid}</span>
      </BidWrapper>
      <h3>{name}</h3>
      <BidderWrapper>
        {UserBidder &&
          UserBidder.slice(0, 5).map((item, index) => {
            return (
              <Bidder
                key={index}
                {...item}
                avatar={`https://i.pravatar.cc/150?img=${item.id}`}
              />
            );
          })}
        {UserBidder && UserBidder.length > 5 && (
          <LoadMoreBidder>{`${UserBidder.length - 5}+`}</LoadMoreBidder>
        )}
      </BidderWrapper>
    </CardContainer>
  );
}

export default Card;
