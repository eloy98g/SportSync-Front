import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

// Components
import MainButton from "../../../components/common/buttons/MainButton";
import BackHeader from "../../../components/BackHeader";
import Divider from "../../../components/common/Divider";
import Screen from "../../../components/common/Screen";
import PersonalData from "./components/PersonalData";
import Error from "../../../components/Status/Error";
import ProfilePicturePicker from "./components/ProfilePicturePicker";
import UserPreferences from "./components/UserPreferences";
import Title from "./components/Title";

// Hooks
import { useAppDispatch, useAppSelector } from "../../../hooks";
import useStatus from "../../../hooks/useStatus";

// Services
import Api from "../../../services/api";
import { setUser } from "../../../store/features/user/userSlice";

const EditProfile = () => {
  const user = useAppSelector((state) => state.user.user);
  const { status, setStatus } = useStatus();
  const [error, setError] = useState("");
  const [editedUser, setEditedUser] = useState(user);
  const dispatch = useAppDispatch();

  const saveData = async () => {
    setError("");
    try {
      setStatus("loading");
      console.log("editedUser", JSON.stringify(editedUser));
      const response = await Api.user.update(user.gid, editedUser);
      if (response.status === "success") {
        setStatus("success");
        dispatch(setUser(response.data));
      } else {
        setStatus("error");
        setError(response.message);
      }
    } catch (error: any) {
      setStatus("error");
      setError(error.message);
    }
  };
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
        <Divider height={12} />
        <UserPreferences
          editedUser={editedUser}
          setEditedUser={setEditedUser}
        />
        <Divider height={36} />
        <MainButton
          onPress={saveData}
          title="Guardar cambios"
          fontSize={18}
          loading={status === "loading"}
        />
        <View style={styles.error}>
          <Error error={error} />
        </View>
        <Divider height={60} />
      </ScrollView>
    </Screen>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 1,
    paddingHorizontal: 12,
  },
  error: {
    height: 46,
    width: "100%",
  },
});
