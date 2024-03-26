import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LocationPicker from "../../../../components/common/inputs/LocationPicker";
import User from "../../../../store/types/user/User";

interface Props {
  editedUser: User;
  setEditedUser: React.Dispatch<React.SetStateAction<User>>;
}

const UserPreferences = ({ editedUser, setEditedUser }: Props) => {
  return (
    <View>
      <LocationPicker />
    </View>
  );
};

export default UserPreferences;

const styles = StyleSheet.create({});
