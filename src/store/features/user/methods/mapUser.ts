import { EMPTY_PLAYAREA } from "../../../types/PlayArea";
import User from "../../../types/User";

const mapUser = (data: any): User => {
  const newUser: User = {
    email: data?.email || null,
    name: data?.name || null,
    gid: data?.gid || null,
    phone: data?.phone || null,
    image: data?.image || null,
    description: data?.description || null,
    playArea: data?.playArea || EMPTY_PLAYAREA,
    birthDate: data?.birthDate || null,
    phoneVerified: data?.phoneVerified || false,
    emailVerified: data?.emailVerified || false,
    creationDate: data?.creationDate || null,
    published: data?.published || null,
    participated: data?.participated || null,
    lastParticipation: data?.lastParticipation || null,
  };

  return newUser;
};

export default mapUser;
