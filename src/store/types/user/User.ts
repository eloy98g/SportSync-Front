import Location, { EMPTY_LOCATION } from "../location/Location";

type User = {
  gid: number;
  name?: string;
  email: string;
  phone: number | null;
  image: string | null;
  description: string | null;
  location: Location;
  birthDate: number | null;
  creationDate: number | null;
  phoneVerified: boolean;
  emailVerified: boolean;
  published: number;
  participated: number;
  lastParticipation: number;
  gender: string;
  favoriteSports: number[]
};

export const EMPTY_USER: User = {
  email: "",
  name: "",
  gid: 0,
  phone: null,
  image: null,
  description: null,
  location: EMPTY_LOCATION,
  birthDate: null,
  phoneVerified: false,
  emailVerified: false,
  creationDate: null,
  published: 0,
  participated: 0,
  lastParticipation: 0,
  gender: "N/A",
  favoriteSports:[]
};

export default User;
