export default interface Sport {
  gid: number | null;
  name: string;
  icon: string;
  color: string | null;
}

export const EMPTY_SPORT: Sport = {
  gid: null,
  name: "",
  icon: "",
  color: null,
};
