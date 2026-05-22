export type Player = {
  rank: number;
  name: string;
  team: string;
  region: string;
  deals: number;
  revenue: number;
  history: number[];
  scores: Record<TimeFilter, number>;
};

export type TimeFilter = "day" | "month" | "year" | "2years" | "5years";

export const timeFilterOptions: { value: TimeFilter; label: string }[] = [
  { value: "day", label: "Last day" },
  { value: "month", label: "Last month" },
  { value: "year", label: "Last year" },
  { value: "2years", label: "Last 2 years" },
  { value: "5years", label: "Last 5 years" },
];

export const players: Player[] = [
  {
    rank: 1,
    name: "Jan Zámostný",
    team: "Sales",
    region: "Prague",
    deals: 42,
    revenue: 420000,
    history: [4, 3, 2, 2, 1, 1],
    scores: { day: 96, month: 420, year: 1800, "2years": 3100, "5years": 7100 },
  },
  {
    rank: 2,
    name: "Tereza Nováková",
    team: "Account",
    region: "Brno",
    deals: 38,
    revenue: 386000,
    history: [5, 4, 4, 3, 2, 2],
    scores: { day: 88, month: 450, year: 1720, "2years": 3400, "5years": 7600 },
  },
  {
    rank: 3,
    name: "Marek Svoboda",
    team: "Business",
    region: "Ostrava",
    deals: 35,
    revenue: 351000,
    history: [6, 5, 4, 4, 3, 3],
    scores: { day: 91, month: 390, year: 1680, "2years": 3350, "5years": 6900 },
  },
  {
    rank: 4,
    name: "Lucie Králová",
    team: "Sales",
    region: "Prague",
    deals: 31,
    revenue: 318000,
    history: [7, 6, 5, 5, 4, 4],
    scores: { day: 79, month: 365, year: 1620, "2years": 2900, "5years": 6200 },
  },
  {
    rank: 5,
    name: "Petr Černý",
    team: "Account",
    region: "Brno",
    deals: 29,
    revenue: 292000,
    history: [8, 7, 7, 6, 5, 5],
    scores: { day: 71, month: 330, year: 1510, "2years": 3050, "5years": 6400 },
  },
  {
    rank: 6,
    name: "Adam Dvořák",
    team: "Business",
    region: "Ostrava",
    deals: 27,
    revenue: 276000,
    history: [9, 8, 8, 7, 6, 6],
    scores: { day: 84, month: 310, year: 1490, "2years": 2800, "5years": 6100 },
  },
  {
    rank: 7,
    name: "Eva Malá",
    team: "Sales",
    region: "Prague",
    deals: 24,
    revenue: 244000,
    history: [10, 9, 8, 8, 7, 7],
    scores: { day: 66, month: 355, year: 1410, "2years": 2750, "5years": 5900 },
  },
  {
    rank: 8,
    name: "Tomáš Procházka",
    team: "Account",
    region: "Brno",
    deals: 22,
    revenue: 231000,
    history: [10, 10, 9, 9, 8, 8],
    scores: { day: 69, month: 295, year: 1360, "2years": 2600, "5years": 6000 },
  },
  {
    rank: 9,
    name: "Anna Veselá",
    team: "Business",
    region: "Ostrava",
    deals: 20,
    revenue: 219000,
    history: [10, 10, 10, 10, 9, 9],
    scores: { day: 74, month: 280, year: 1320, "2years": 2680, "5years": 5750 },
  },
  {
    rank: 10,
    name: "Filip Horák",
    team: "Sales",
    region: "Prague",
    deals: 18,
    revenue: 198000,
    history: [10, 10, 10, 10, 10, 10],
    scores: { day: 61, month: 250, year: 1210, "2years": 2300, "5years": 5600 },
  },
];

export const topThree = [players[1], players[0], players[2]];
export const rest = players.slice(3);

export const teamOptions = [...new Set(players.map((player) => player.team))];
export const regionOptions = [...new Set(players.map((player) => player.region))];
