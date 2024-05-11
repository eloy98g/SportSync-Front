import Location, { EMPTY_LOCATION } from "../location/Location";

type User = {
  gid: string;
  name: string;
  email: string;
  phone: number;
  image: string;
  description: string;
  location: Location;
  birthdate: number;
  creationDate: number;
  phoneVerified: boolean;
  emailVerified: boolean;
  published: number; // TODO: this must be calculated runtime
  participated: number; // TODO: this must be calculated runtime
  lastParticipation: number; // TODO: this must be calculated runtime
  gender: string;
  favoriteSports: string[];
};

export const EMPTY_USER: User = {
  email: "",
  name: "",
  gid: "",
  phone: 0,
  image: "",
  description: "",
  location: EMPTY_LOCATION,
  birthdate: 0,
  phoneVerified: false,
  emailVerified: false,
  creationDate: 0,
  published: 0,
  participated: 0,
  lastParticipation: 0,
  gender: "N/A",
  favoriteSports: [],
};

export default User;
