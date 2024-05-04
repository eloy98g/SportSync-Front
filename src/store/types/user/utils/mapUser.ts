import mapLocation from "../../../types/location/utils/mapLocation";
import User from "../../../types/user/User";

const mapUser = (data: any): User => {
  const newUser: User = {
    email: data?.email,
    name: data?.name,
    gid: data?.gid,
    phone: data?.phone,
    image: data?.image,
    description: data?.description,
    location: mapLocation(data?.location),
    birthdate: data?.birthdate,
    phoneVerified: data?.phoneVerified,
    emailVerified: data?.emailVerified,
    creationDate: data?.creationDate,
    published: data?.published,
    participated: data?.participated,
    lastParticipation: data?.lastParticipation,
    gender: data?.gender,
    favoriteSports: data?.favoriteSports,
  };

  return newUser;
};

export default mapUser;