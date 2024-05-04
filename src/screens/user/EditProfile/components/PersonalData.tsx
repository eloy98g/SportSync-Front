import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import Divider from "../../../../components/common/Divider";
import DatePicker from "../../../../components/common/inputs/DatePicker";
import Select from "../../../../components/common/inputs/Select";
import TextArea from "../../../../components/common/inputs/TextArea";
import TextInput from "../../../../components/common/inputs/TextInput";
import Label from "../../../../components/common/Label";

// Constants
import GENDERS from "../../../../constants/GENDERS";

// Types
import User from "../../../../store/types/user/User";

interface Props {
  editedUser: User;
  setEditedUser: React.Dispatch<React.SetStateAction<User>>;
}

const PersonalData = ({ editedUser, setEditedUser }: Props) => {
  const changeName = (e: string) => {
    setEditedUser((prev) => ({ ...prev, name: e }));
  };
  const changeDescription = (e: string) => {
    setEditedUser((prev) => ({ ...prev, description: e }));
  };
  const changeGender = (input: string) => {
    setEditedUser((prev) => ({ ...prev, gender: input }));
  };
  const changeEmail = (e: string) => {
    setEditedUser((prev) => ({ ...prev, email: e }));
  };
  const changePhone = (e: any) => {
    setEditedUser((prev) => ({ ...prev, phone: e }));
  };
  const changeBirthday = (input: any) => {
    const unixTime = Date.parse(input);
    setEditedUser((prev) => ({ ...prev, birthdate: unixTime }));
  };

  const genderText =
    editedUser.gender === "male"
      ? "Hombre"
      : editedUser.gender === "female"
      ? "Mujer"
      : "N/A";

  return (
    <View style={styles.container}>
      <Label text="Nombre y apellidos" />
      <TextInput value={editedUser.name} onChange={changeName} />
      <Divider height={12} />
      <Label text="Email" />
      <TextInput value={editedUser.email} onChange={changeEmail} />
      <Divider height={12} />
      <Label text="Teléfono" />
      <TextInput value={editedUser.phone.toString()} onChange={changePhone} />
      <Divider height={12} />
      <Label text="Género" />
      <Select
        data={GENDERS}
        value={genderText}
        setValue={changeGender}
        placeholder={"Selecciona Género"}
      />
      <Divider height={12} />
      <Label text="Fecha de Nacimiento" />
      <DatePicker
        minDate={new Date(1940, 0, 1)}
        value={editedUser.birthdate}
        setValue={changeBirthday}
      />
      <Divider height={12} />
      <Label text="Descripción" />
      <TextArea
        value={editedUser.description}
        onChange={changeDescription}
        height={200}
      />
    </View>
  );
};

export default PersonalData;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
