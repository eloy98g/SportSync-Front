import React from "react";
import { View } from "react-native";

// Components
import LocationPicker from "../../../../components/common/inputs/LocationPicker";

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
      <LocationPicker
        setValue={locationHandler}
        option="radius"
        location={editedUser.location}
      />
    </View>
  );
};

export default UserPreferences;
