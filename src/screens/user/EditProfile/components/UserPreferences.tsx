import React from "react";
import { StyleSheet, Text, View } from "react-native";
import User from "../../../../store/types/User";

interface Props {
  editedUser: User;
  setEditedUser: React.Dispatch<React.SetStateAction<User>>;
}

const UserPreferences = ({ editedUser, setEditedUser }: Props) => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default UserPreferences;

const styles = StyleSheet.create({});
