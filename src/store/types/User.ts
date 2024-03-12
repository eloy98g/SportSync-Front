import PlayArea, { EMPTY_PLAYAREA } from "./PlayArea";

type User = {
  gid: number | null;
  name: string | null;
  email: string | null;
  phone: number | null;
  image: string | null;
  description: string | null;
  playArea: PlayArea;
  birthDate: number | null;
  creationDate: number | null;
  phoneVerified: boolean;
  emailVerified: boolean;
  published: number | null;
  participated: number | null;
  lastParticipation: number | null;
};

export const EMPTY_USER: User = {
  email: null,
  name: null,
  gid: null,
  phone: null,
  image: null,
  description: null,
  playArea: EMPTY_PLAYAREA,
  birthDate: null,
  phoneVerified: false,
  emailVerified: false,
  creationDate: null,
  published: null,
  participated: null,
  lastParticipation: null,
};

export default User;
