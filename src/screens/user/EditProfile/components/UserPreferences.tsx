import React from "react";
import { View } from "react-native";

// Components
import LocationPicker from "../../../../components/common/inputs/LocationPicker";
import Divider from "../../../../components/common/Divider";
import Label from "../../../../components/common/Label";
import SportPicker from "./SportPicker";

// Types
import User from "../../../../store/types/user/User";

interface Props {
  editedUser: User;
  setEditedUser: React.Dispatch<React.SetStateAction<User>>;
}

const UserPreferences = ({ editedUser, setEditedUser }: Props) => {
  const locationHandler = () => {};

  return (
    <View>
      <Label text="Área de juego" />
      <LocationPicker
        setValue={locationHandler}
        option="radius"
        location={editedUser.location}
      />
      <Divider height={12} />
      <Label text="Deportes favoritos" />
      <SportPicker />
    </View>
  );
};

export default UserPreferences;
