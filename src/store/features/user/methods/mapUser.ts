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
    verified: data?.verified || false,
    playArea: data?.playArea || EMPTY_PLAYAREA,
    birthDate: data?.birthDate || null,
  };

  return newUser;
};

export default mapUser;
