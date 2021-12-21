export interface ArtistProps {
  createdAt: Date;
  name: string;
  avatar: string;
  username: string;
  id: string;
}

const Data: ArtistProps[] = [
  {
    createdAt: new Date("2021-12-04T11:58:13.734Z"),
    name: "Everett Trantow",
    avatar: "https://i.pravatar.cc/150?img=33",
    username: "Jorge.Kerluke",
    id: "1",
  },
  {
    createdAt: new Date("2021-12-04T10:41:40.359Z"),
    name: "Johnny Turcotte",
    avatar: "https://i.pravatar.cc/150?img=11",
    username: "Jenifer4",
    id: "2",
  },
  {
    createdAt: new Date("2021-12-04T10:41:40.359Z"),
    name: "Sebastian Swain",
    avatar: "https://i.pravatar.cc/150?img=19",
    username: "sebas11",
    id: "3",
  },
  {
    createdAt: new Date("2021-12-04T10:41:40.359Z"),
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=3",
    username: "jjohn",
    id: "4",
  },
];

export { Data };
