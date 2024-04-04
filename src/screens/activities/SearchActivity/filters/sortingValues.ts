import SortBy from "../types/SortBy";

const sortingValues: { value: SortBy; label: string }[] = [
  { value: "recent", label: "Más recientes" },
  { value: "numPlayers", label: "Número de jugadores" },
  { value: "closest", label: "Más cercano" },
];

export default sortingValues;
