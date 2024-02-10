import PlayArea from "./PlayArea";

export default interface User {
  gid: number;
  name: string;
  email: string;
  phone: number;
  image: string;
  description: string;
  verified: boolean;
  playArea: PlayArea;
  birthDate: number;
}
