import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LocationPicker from "../../../../components/common/inputs/LocationPicker";
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
        value={editedUser.location}
        setValue={locationHandler}
        option="radius"
        initialLocation={editedUser.location}
      />
    </View>
  );
};

export default UserPreferences;
