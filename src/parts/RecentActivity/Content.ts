export interface ActivityProps {
  createdAt: Date;
  name: string;
  avatar: string;
  message: string;
  id: string;
  isOnline: boolean;
}

const Data: ActivityProps[] = [
  {
    createdAt: new Date("2021-11-18T08:50:15.283Z"),
    name: "Mr. Julie Braun",
    avatar: "https://i.pravatar.cc/150?img=37",
    message: "dolores provident corporis",
    id: "1",
    isOnline: true,
  },
  {
    createdAt: new Date("2021-11-19T00:01:44.768Z"),
    name: "Glenn Cummings",
    avatar: "https://i.pravatar.cc/150?img=32",
    message: "incidunt corporis aut",
    id: "2",
    isOnline: false,
  },
  {
    createdAt: new Date("2021-11-18T08:50:15.283Z"),
    name: "Mrs. Annie",
    avatar: "https://i.pravatar.cc/150?img=39",
    message: "dolores next time",
    id: "3",
    isOnline: true,
  },
  {
    createdAt: new Date("2021-11-19T00:01:44.768Z"),
    name: "Riven",
    avatar: "https://i.pravatar.cc/150?img=3",
    message: "sdfaa curposa aut",
    id: "4",
    isOnline: false,
  },
];

export { Data };
