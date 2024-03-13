import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import TouchableText from "../../../../components/common/buttons/TouchableText";
import Divider from "../../../../components/common/Divider";
import TextInput from "../../../../components/common/inputs/TextInput";
import MainButton from "../../../../components/common/buttons/MainButton";

// Theme
import { PHONE } from "../../../../theme/breakPoints";
import { family } from "../../../../theme/fonts";
import colors from "../../../../theme/colors";

// Store
import fetchUser from "../../../../store/features/user/methods/fetchUser";

// Hooks
import { useAppDispatch } from "../../../../hooks";

const Login = ({ setSection, navigation }: any) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  const loginHandler = () => {
    dispatch(fetchUser());
    setSection();
    setTimeout(() => {
      navigation?.navigate("Home" as never);
    });
  };

  const goToSignIn = () => setSection("SignIn");
  const goToForgotPassword = () => setSection("ForgotPassword");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicia sesión</Text>
      <Divider height={30} />
      <TextInput value={user} onChange={setUser} placeholder="Usuario" />
      <Divider height={22} />
      <TextInput
        value={password}
        onChange={setPassword}
        placeholder="Contraseña"
        secure
      />
      <Divider height={22} />
      <MainButton title={"Aceptar"} onPress={loginHandler} />
      <Divider height={22} />
      <TouchableText
        onPress={goToForgotPassword}
        textStyle={styles.text}
        text={"He olvidado mi contraseña"}
      />
      <Divider height={12} />
      <View style={styles.row}>
        <Text style={styles.text}>¿No tienes cuenta? </Text>
        <TouchableText
          onPress={goToSignIn}
          text="Regístrate"
          textStyle={[styles.text, { fontFamily: family.bold }]}
        />
      </View>
    </View>
  );
};

export default Login;

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
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
