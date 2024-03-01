import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

// Components
import Divider from "../../../../components/common/Divider";
import TextInput from "../../../../components/common/inputs/TextInput";
import MainButton from "../../../../components/common/buttons/MainButton";

// Theme
import { PHONE } from "../../../../theme/breakPoints";
import { family } from "../../../../theme/fonts";
import colors from "../../../../theme/colors";

const ForgotPassword = ({ setSection }: any) => {
  const [user, setUser] = useState("");

  const forgotPasswordHandler = () => {};

  const goBack = () => setSection("LogIn");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recupera tu contraseña</Text>
      <Divider height={30} />
      <TextInput value={user} onChange={setUser} placeholder="Usuario" />
      <Divider height={22} />
      <MainButton title={"Aceptar"} onPress={forgotPasswordHandler} />
      <Divider height={22} />
      <TouchableOpacity onPress={goBack}>
        <Text style={styles.text}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 350,
    maxWidth: PHONE,
  },
  title: {
    fontFamily: family.bold,
    color: colors.primary,
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    fontFamily: family.normal,
    color: colors.primary,
    fontSize: 18,
    textAlign: "center",
  },
});
