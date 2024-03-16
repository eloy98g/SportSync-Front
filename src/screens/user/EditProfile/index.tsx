import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import BackHeader from "../../../components/BackHeader";
import Divider from "../../../components/common/Divider";
import Screen from "../../../components/common/Screen";
import ChangePassword from "./components/ChangePassword";
import PersonalData from "./components/PersonalData";
import ProfilePicturePicker from "./components/ProfilePicturePicker";
import UserPreferences from "./components/UserPreferences";

const EditProfile = () => {
  return (
    <Screen>
      <BackHeader title={"Editar perfil"} />
      <View style={styles.container}>
        <Divider height={12} />
        <ProfilePicturePicker />
        <PersonalData />
        <UserPreferences />
        <ChangePassword />
      </View>
    </Screen>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 12,
  },
});
