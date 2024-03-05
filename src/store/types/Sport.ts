export default interface Sport {
  gid: number | null;
  name: string;
  icon: string;
}

export const EMPTY_SPORT: Sport = {
  gid: null,
  name: "",
  icon: "",
};
