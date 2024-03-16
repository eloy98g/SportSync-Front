import React from "react";
import { StyleSheet, View } from "react-native";
import Divider from "../../../../components/common/Divider";
import TextArea from "../../../../components/common/inputs/TextArea";
import TextInput from "../../../../components/common/inputs/TextInput";
import Label from "../../../../components/common/Label";
import User from "../../../../store/types/User";

interface Props {
  editedUser: User;
  setEditedUser: React.Dispatch<React.SetStateAction<User>>;
}

const PersonalData = ({ editedUser, setEditedUser }: Props) => {
  const changeName = () => {};
  const changeDescription = () => {};
  return (
    <View style={styles.container}>
      <Label text="Nombre y apellidos" />
      <TextInput value={editedUser.name} onChange={changeName} />
      <Divider height={12} />
      <Label text="Email" />
      <TextInput value={editedUser.email} onChange={changeName} />
      <Divider height={12} />
      <Label text="Teléfono" />
      <TextInput value={editedUser.phone?.toString()} onChange={changeName} />
      <Divider height={12} />
      <Label text="Género" />
      <Label text="Fecha de Nacimiento" />
      <Label text="Descripción" />
      <TextArea value={editedUser.description} onChange={changeDescription} />
    </View>
  );
};

export default PersonalData;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
