const Content: {
  isActive: boolean;
  text: string;
  slug: string;
  category: string;
}[] = [
  {
    isActive: true,
    text: "Live Auction",
    slug: "liveaction",
    category: "category",
  },
  { isActive: false, text: "Art", slug: "art", category: "category" },
  {
    isActive: false,
    text: "Photography",
    slug: "liveaction",
    category: "category",
  },
  { isActive: false, text: "Games", slug: "games", category: "category" },
  { isActive: false, text: "Music", slug: "music", category: "category" },
  {
    isActive: false,
    text: "Utility",
    slug: "util",
    category: "category",
  },
];

export type ExploreDataProps = {
  createdAt: Date;
  name: string;
  artworksUrl: string;
  currentBid: string;
  bid_starts: Date;
  bid_ends: Date;
  id: string;
};

const DataExplore: ExploreDataProps[] = [
  {
    createdAt: new Date("2021-11-18T09:24:54.449Z"),
    name: "Miss Natasha Weber",
    artworksUrl: "http://placeimg.com/640/480/nature",
    currentBid: "540.00",
    bid_starts: new Date("2021-11-18T22:53:24.815Z"),
    bid_ends: new Date("2021-11-19T17:18:12.541Z"),
    id: "23",
  },
  {
    createdAt: new Date("2021-11-18T13:05:20.585Z"),
    name: "Frank De Lopez",
    artworksUrl: "http://placeimg.com/640/480/arch",
    currentBid: "902.00",
    bid_starts: new Date("2021-11-18T20:34:48.803Z"),
    bid_ends: new Date("2021-11-20T00:49:59.664Z"),
    id: "25",
  },
  {
    createdAt: new Date("2021-11-18T16:12:33.215Z"),
    name: "Dany Caknan",
    artworksUrl: "http://placeimg.com/640/480/tech/grayscale",
    currentBid: "948.00",
    bid_starts: new Date("2021-11-18T16:50:56.134Z"),
    bid_ends: new Date("2021-11-20T00:25:50.040Z"),
    id: "32",
  },
  {
    createdAt: new Date("2021-11-18T01:04:26.579Z"),
    name: "John Stoltenberg",
    artworksUrl: "http://placeimg.com/640/480/grayscale",
    currentBid: "778.00",
    bid_starts: new Date("2021-11-18T22:26:24.574Z"),
    bid_ends: new Date("2021-11-19T00:57:37.389Z"),
    id: "22",
  },
  {
    createdAt: new Date("2021-11-18T09:24:54.449Z"),
    name: "Miss Indie Weber",
    artworksUrl: "http://placeimg.com/640/480/people",
    currentBid: "540.00",
    bid_starts: new Date("2021-11-18T22:53:24.815Z"),
    bid_ends: new Date("2021-11-19T17:18:12.541Z"),
    id: "45",
  },
  {
    createdAt: new Date("2021-11-18T13:05:20.585Z"),
    name: "Frank Lampard",
    artworksUrl: "http://placeimg.com/640/480",
    currentBid: "902.00",
    bid_starts: new Date("2021-11-18T20:34:48.803Z"),
    bid_ends: new Date("2021-11-20T00:49:59.664Z"),
    id: "99",
  },
  {
    createdAt: new Date("2021-11-18T16:12:33.215Z"),
    name: "Dana Berg",
    artworksUrl: "http://placeimg.com/640/480/sepia",
    currentBid: "948.00",
    bid_starts: new Date("2021-11-18T16:50:56.134Z"),
    bid_ends: new Date("2021-11-20T00:25:50.040Z"),
    id: "32",
  },
  {
    createdAt: new Date("2021-11-18T01:04:26.579Z"),
    name: "Boyd Stockholm",
    artworksUrl: "http://placeimg.com/640/480/grayscale",
    currentBid: "778.00",
    bid_starts: new Date("2021-11-18T22:26:24.574Z"),
    bid_ends: new Date("2021-11-19T00:57:37.389Z"),
    id: "8",
  },
];

export interface BidderImgProps {
  createdAt: Date;
  name: string;
  avatar: string;
  id: string;
}

const UserBidder: BidderImgProps[] = [
  {
    createdAt: new Date("2021-11-18T06:53:25.682Z"),
    name: "Bernice Upton",
    avatar: "https://cdn.fakercloud.com/avatars/craighenneberry_128.jpg",
    id: "1",
  },
  {
    createdAt: new Date("2021-11-18T10:12:21.994Z"),
    name: "Ms. Monica Gaylord",
    avatar: "https://cdn.fakercloud.com/avatars/jitachi_128.jpg",
    id: "3",
  },
  {
    createdAt: new Date("2021-11-18T08:57:57.604Z"),
    name: "Tyler Boyer",
    avatar: "https://cdn.fakercloud.com/avatars/baliomega_128.jpg",
    id: "4",
  },
  {
    createdAt: new Date("2021-11-18T10:12:21.994Z"),
    name: "Ms. Monica Gaylord",
    avatar: "https://cdn.fakercloud.com/avatars/jitachi_128.jpg",
    id: "32",
  },
  {
    createdAt: new Date("2021-11-18T08:57:57.604Z"),
    name: "Tyler Boyer",
    avatar: "https://cdn.fakercloud.com/avatars/baliomega_128.jpg",
    id: "56",
  },
  {
    createdAt: new Date("2021-11-18T10:12:21.994Z"),
    name: "Ms. Monica Amb",
    avatar: "https://cdn.fakercloud.com/avatars/jitachi_128.jpg",
    id: "42",
  },
  {
    createdAt: new Date("2021-11-18T08:57:57.604Z"),
    name: "John Boyer",
    avatar: "https://cdn.fakercloud.com/avatars/baliomega_128.jpg",
    id: "11",
  },
];

export default Content;
export { DataExplore, UserBidder };
