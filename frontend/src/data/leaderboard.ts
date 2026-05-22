export type Player = {
  rank: number;
  name: string;
  team: string;
  deals: number;
  revenue: number;
  history: number[];
};

export const players: Player[] = [
  {
    rank: 1,
    name: "Jan Zámostný",
    team: "Sales",
    deals: 42,
    revenue: 420000,
    history: [4, 3, 2, 2, 1, 1],
  },
  {
    rank: 2,
    name: "Tereza Nováková",
    team: "Account",
    deals: 38,
    revenue: 386000,
    history: [5, 4, 4, 3, 2, 2],
  },
  {
    rank: 3,
    name: "Marek Svoboda",
    team: "Business",
    deals: 35,
    revenue: 351000,
    history: [6, 5, 4, 4, 3, 3],
  },
  {
    rank: 4,
    name: "Lucie Králová",
    team: "Sales",
    deals: 31,
    revenue: 318000,
    history: [7, 6, 5, 5, 4, 4],
  },
  {
    rank: 5,
    name: "Petr Černý",
    team: "Account",
    deals: 29,
    revenue: 292000,
    history: [8, 7, 7, 6, 5, 5],
  },
  {
    rank: 6,
    name: "Adam Dvořák",
    team: "Business",
    deals: 27,
    revenue: 276000,
    history: [9, 8, 8, 7, 6, 6],
  },
  {
    rank: 7,
    name: "Eva Malá",
    team: "Sales",
    deals: 24,
    revenue: 244000,
    history: [10, 9, 8, 8, 7, 7],
  },
  {
    rank: 8,
    name: "Tomáš Procházka",
    team: "Account",
    deals: 22,
    revenue: 231000,
    history: [10, 10, 9, 9, 8, 8],
  },
  {
    rank: 9,
    name: "Anna Veselá",
    team: "Business",
    deals: 20,
    revenue: 219000,
    history: [10, 10, 10, 10, 9, 9],
  },
  {
    rank: 10,
    name: "Filip Horák",
    team: "Sales",
    deals: 18,
    revenue: 198000,
    history: [10, 10, 10, 10, 10, 10],
  },
];

export const topThree = [players[1], players[0], players[2]];
export const rest = players.slice(3);
