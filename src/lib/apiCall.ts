import axios from "axios";
const Addr =
  "https://6196ed95af46280017e7e326.mockapi.io/waveast/api/nft-marketplace/:endpoint";

export type ExploreDataProps = {
  createdAt: Date;
  name: string;
  artworksUrl: string;
  currentBid: string;
  bid_starts: Date;
  bid_ends: Date;
  id: string;
};

const CallExploreData = async () => {
  const endPoint = await axios.get(`${Addr}/featured-artworks`);
  const result = endPoint.data;
  return result;
};

const CallTopArtist = async () => {
  const endPoint = await axios.get(`${Addr}/top-artist`);
  const result = endPoint.data;
  return result;
};

export { CallExploreData, CallTopArtist };
