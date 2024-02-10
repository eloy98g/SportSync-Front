import Place from "./Place";

export default interface Activity {
  gid: number;
  place: Place;
  creationDate: number;
  endDate: number;
  admin: number;
  access: number;
  name: string;
  description: string;
  sport: number;
  type: number;
  teams: number;
  playersPerTeam: number;
  closed: boolean;
  chat: number;
}
