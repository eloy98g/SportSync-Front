import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Modal from "../../../../components/common/Modal";
import Label from "../../../../components/common/Label";
import { family } from "../../../../theme/fonts";
import colors from "../../../../theme/colors";
import TextInput from "../../../../components/common/inputs/TextInput";
import Divider from "../../../../components/common/Divider";
import TextArea from "../../../../components/common/inputs/TextArea";
import Select from "../../../../components/common/inputs/Select";
import GENDERS from "../../../../constants/GENDERS";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import useStatus from "../../../../hooks/useStatus";
import Api from "../../../../services/api";
import { setUser } from "../../../../store/features/user/userSlice";
import MainButton from "../../../../components/common/buttons/MainButton";
import Error from "../../../../components/Status/Error";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  visible: boolean;
  setVisible: (T: boolean) => void;
}

const CompleteProfileModal = ({ visible, setVisible }: Props) => {
  const dispatch = useAppDispatch();
  const userGid = useAppSelector((state) => state.user.user.gid);

  const { status, setStatus } = useStatus();
  const [error, setError] = useState<string | null>();
  const [editedUser, setEditedUser] = useState({
    name: "",
    description: "",
    gender: "N/A",
  });

  const changeName = (e: string) => {
    setEditedUser((prev) => ({ ...prev, name: e }));
  };

  const changeDescription = (e: string) => {
    setEditedUser((prev) => ({ ...prev, description: e }));
  };

  const changeGender = (input: string) => {
    setEditedUser((prev) => ({ ...prev, gender: input }));
  };

  const genderText =
    editedUser.gender === "male"
      ? "Hombre"
      : editedUser.gender === "female"
      ? "Mujer"
      : "N/A";

  const saveData = async () => {
    setError(null);
    try {
      if (editedUser.name === "") {
        setError("El nombre es obligatorio");
        return;
      }
      setStatus("loading");
      console.log("editedUser", JSON.stringify(editedUser));
      const response = await Api.user.update(userGid, editedUser);
      if (response.status === "success") {
        setStatus("success");
        dispatch(setUser(response.data));
        await AsyncStorage.setItem(
          "profileDone",
          JSON.stringify({ userGid, profileDone: true })
        );
        setVisible(false);
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
    <Modal visible={visible} setVisible={setVisible} dismissable={false}>
      <Text style={styles.title}>¡Bienvenid@ a Sport Up!</Text>
      <Divider height={12} />

      <View style={styles.content}>
        <Text
          style={styles.description}
        >{`En Sport Up podrás encontrar el partido o actividad que más se adapte a tus gustos.\n¡No te quedes con las ganas de hacer deporte!`}</Text>
        <Divider height={12} />
        <Label text="Nombre y apellidos" />
        <TextInput value={editedUser.name} onChange={changeName} />
        <Divider height={12} />
        <Label text="Descripción" />
        <TextArea
          value={editedUser.description}
          onChange={changeDescription}
          height={100}
        />
        <Divider height={12} />
        <Label text="Género" />
        <Select
          data={GENDERS}
          value={genderText}
          setValue={changeGender}
          placeholder={"Selecciona Género"}
        />
      </View>
      <Divider height={12} />
      <View style={styles.error}>
        <MainButton
          onPress={saveData}
          title="Guardar cambios"
          fontSize={18}
          loading={status === "loading"}
        />
      </View>
      {error && (
        <View style={styles.error}>
          <Error error={error} />
        </View>
      )}
    </Modal>
  );
};

export default CompleteProfileModal;

const styles = StyleSheet.create({
  title: {
    fontFamily: family.bold,
    fontSize: 24,
    color: colors.primary,
  },
  description: {
    fontFamily: family.normal,
    textAlign: "center",
    fontSize: 16,
    color: colors.black,
  },
  content: {
    width: "100%",
  },
  error: {
    height: 46,
    width: "100%",
  },
});
