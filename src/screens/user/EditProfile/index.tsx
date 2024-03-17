import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";

// Components
import BackHeader from "../../../components/BackHeader";
import Divider from "../../../components/common/Divider";
import Screen from "../../../components/common/Screen";
import Account from "./components/Account";
import PersonalData from "./components/PersonalData";
import ProfilePicturePicker from "./components/ProfilePicturePicker";
import UserPreferences from "./components/UserPreferences";

// Hooks
import { useAppSelector } from "../../../hooks";
import Title from "./components/Title";

const EditProfile = () => {
  const user = useAppSelector((state) => state.user.user);
  const [editedUser, setEditedUser] = useState(user);

  return (
    <Screen>
      <BackHeader title={"Editar perfil"} />
      <ScrollView style={styles.container}>
        <Divider height={92} />
        <ProfilePicturePicker
          editedUser={editedUser}
          setEditedUser={setEditedUser}
        />
        <Divider height={24} />
        <PersonalData editedUser={editedUser} setEditedUser={setEditedUser} />
        <Divider height={24} />
        <Title text="Preferencias de juego" />
        <Divider height={24} />
        <UserPreferences
          editedUser={editedUser}
          setEditedUser={setEditedUser}
        />
        <Divider height={12} />
        <Title text="Tu cuenta" />
        <Divider height={12} />
        <Account />
      </ScrollView>
    </Screen>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height:1,
    paddingHorizontal: 24,
  },
});
