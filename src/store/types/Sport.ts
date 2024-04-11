export default interface Sport {
  gid: number;
  name: string;
  icon: string;
  color: string | null;
}

export const EMPTY_SPORT: Sport = {
  gid: 0,
  name: "",
  icon: "",
  color: null,
};
