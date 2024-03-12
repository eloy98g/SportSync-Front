import PlayArea, { EMPTY_PLAYAREA } from "./PlayArea";

type User = {
  gid: number | null;
  name: string | null;
  email: string | null;
  phone: number | null;
  image: string | null;
  description: string | null;
  verified: boolean;
  playArea: PlayArea;
  birthDate: number | null;
  creationDate: number | null;
};

export const EMPTY_USER: User = {
  email: null,
  name: null,
  gid: null,
  phone: null,
  image: null,
  description: null,
  verified: false,
  playArea: EMPTY_PLAYAREA,
  birthDate: null,
  creationDate: null,
};

export default User;
