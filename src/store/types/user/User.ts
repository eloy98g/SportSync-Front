import Location, { EMPTY_LOCATION } from "../location/Location";

type User = {
  gid: string;
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
  published: number; // TODO: this must be calculated runtime
  participated: number; // TODO: this must be calculated runtime
  lastParticipation: number; // TODO: this must be calculated runtime
  gender: string;
  favoriteSports: number[];
};

export const EMPTY_USER: User = {
  email: "",
  name: "",
  gid: "",
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
  favoriteSports: [],
};

export default User;
