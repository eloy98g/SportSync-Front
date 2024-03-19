import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import TouchableText from "../../../../components/common/buttons/TouchableText";
import MainButton from "../../../../components/common/buttons/MainButton";
import TextInput from "../../../../components/common/inputs/TextInput";
import Divider from "../../../../components/common/Divider";

// Hooks
import { useAppDispatch } from "../../../../hooks";

// Theme
import { PHONE } from "../../../../theme/breakPoints";
import { family } from "../../../../theme/fonts";
import colors from "../../../../theme/colors";

// Store
import fetchUser from "../../../../store/features/user/methods/fetchUser";

const SignIn = ({ setSection, setOpen, navigation }: any) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const dispatch = useAppDispatch();

  const signInHandler = () => {
    dispatch(fetchUser(2));
    setOpen(false);
    setTimeout(() => {
      navigation?.navigate("Home" as never);
    });
  };

  const goToLogIn = () => setSection("LogIn");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Regístrate</Text>
      <Divider height={22} />
      <TextInput value={user} onChange={setUser} placeholder="Usuario" />
      <Divider height={22} />
      <TextInput
        value={password}
        onChange={setPassword}
        placeholder="Contraseña"
        secure
      />
      <Divider height={22} />
      <TextInput
        value={password2}
        onChange={setPassword2}
        placeholder="Repite la contraseña"
        secure
      />
      <Divider height={22} />
      <MainButton title={"Aceptar"} onPress={signInHandler} fontSize={18} />
      <Divider height={22} />
      <View style={styles.row}>
        <Text style={styles.text}>¿Ya tienes cuenta? </Text>
        <TouchableText
          onPress={goToLogIn}
          text="Inicia sesión"
          textStyle={[styles.text, { fontFamily: family.bold }]}
        />
      </View>
    </View>
  );
};

export default SignIn;

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
    textAlign: "left",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
