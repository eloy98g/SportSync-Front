import { EMPTY_LOCATION } from "../../../types/location/Location";
import User from "../../../types/user/User";

const mapUser = (data: any): User => {
  const newUser: User = {
    email: data?.email || null,
    name: data?.name || null,
    gid: data?.gid || null,
    phone: data?.phone || null,
    image: data?.image || null,
    description: data?.description || null,
    location: data?.location || EMPTY_LOCATION,
    birthDate: data?.birthDate || null,
    phoneVerified: data?.phoneVerified || false,
    emailVerified: data?.emailVerified || false,
    creationDate: data?.creationDate || null,
    published: data?.published || null,
    participated: data?.participated || null,
    lastParticipation: data?.lastParticipation || null,
    gender: data?.gender,
  };

  return newUser;
};

export default mapUser;
