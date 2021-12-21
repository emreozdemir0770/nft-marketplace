import tw, { css, styled } from "twin.macro";

const BidderImg = styled.img(
  tw`border-0 outline-none bg-none rounded-full -mr-4 flex-shrink-0 w-9 h-9 overflow-hidden`
);

export interface BidderImgProps {
  createdAt: Date;
  name: string;
  avatar: string;
  id: string;
}

function Bidder(props: BidderImgProps) {
  return <BidderImg src={props.avatar} alt={props.name} />;
}

export default Bidder;
