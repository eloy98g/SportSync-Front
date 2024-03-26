import PlayArea, { EMPTY_PLAYAREA } from "../PlayArea";

type User = {
  gid: number;
  name?: string;
  email: string;
  phone: number | null;
  image: string | null;
  description: string | null;
  playArea: PlayArea;
  birthDate: number | null;
  creationDate: number | null;
  phoneVerified: boolean;
  emailVerified: boolean;
  published: number;
  participated: number;
  lastParticipation: number;
  gender: string;
};

export const EMPTY_USER: User = {
  email: "",
  name: "",
  gid: 0,
  phone: null,
  image: null,
  description: null,
  playArea: EMPTY_PLAYAREA,
  birthDate: null,
  phoneVerified: false,
  emailVerified: false,
  creationDate: null,
  published: 0,
  participated: 0,
  lastParticipation: 0,
  gender: "N/A",
};

export default User;
