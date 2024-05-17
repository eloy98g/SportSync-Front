import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import PasswordInput from "../../../../components/common/inputs/PasswordInput";
import TouchableText from "../../../../components/common/buttons/TouchableText";
import MainButton from "../../../../components/common/buttons/MainButton";
import TextInput from "../../../../components/common/inputs/TextInput";
import Divider from "../../../../components/common/Divider";

// Hooks
import { useAppDispatch, useAppSelector } from "../../../../hooks";

// Theme
import { PHONE } from "../../../../theme/breakPoints";
import { family } from "../../../../theme/fonts";
import colors from "../../../../theme/colors";

// Store
import signUp from "../../../../store/features/user/methods/signUp";
import fetchCurrentActivities from "../../../../store/features/activity/methods/fetchCurrentActivities";
import fetchFollowing from "../../../../store/features/following/methods/fetchFollowing";
import fetchFavSports from "../../../../store/features/favSport/methods/fetchFavSports";
import fetchChats from "../../../../store/features/chat/methods/fetchChats";

// Utils
import { validPassword } from "../../../../utils/auth/validPassword";
import { validEmail } from "../../../../utils/auth/validEmail";

const SignUp = ({ setSection, setOpen, navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const dispatch = useAppDispatch();
  const { loading, error, user } = useAppSelector((state) => state.user);
  const [signUpError, setSignUpError] = useState("");

  useEffect(() => {
    setSignUpError("");
  }, [email, password, password2]);


  useEffect(() => {
    setSignUpError(error);
  }, [error]);

  const signInHandler = async () => {
    if (password !== password2) {
      setSignUpError("Las contraseñas deben ser iguales");
      return;
    }

    if (!validPassword(password) || !validPassword(password2)) {
      setSignUpError("La contraseña debe tener al menos 8 caracteres");
      return;
    }

    if (!validEmail(email)) {
      setSignUpError("No es un email válido");
      return;
    }

    dispatch(signUp({ email: email, password }));
  };

  const getData = async () => {
    dispatch(fetchCurrentActivities(user.gid));
    dispatch(fetchChats({ userGid: user.gid }));
    dispatch(fetchFollowing({ userGid: user.gid }));
    dispatch(fetchFavSports({ userGid: user.gid }));
  };

  useEffect(() => {
    if (user.gid) {
      setTimeout(() => {
        getData();
      }, 1000);
      setOpen(false);
      navigation.navigate("Home" as never);
    }
  }, [user]);

  const goToLogIn = () => setSection("LogIn");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Regístrate</Text>
      <Divider height={22} />
      <TextInput value={email} onChange={setEmail} placeholder="Correo" />
      <Divider height={22} />
      <PasswordInput
        value={password}
        onChange={setPassword}
        placeholder="Contraseña"
        secure
      />
      <Divider height={22} />
      <PasswordInput
        value={password2}
        onChange={setPassword2}
        placeholder="Repite la contraseña"
        secure
      />
      <Divider height={22} />
      <MainButton
        title={"Aceptar"}
        onPress={signInHandler}
        fontSize={18}
        loading={loading}
      />
      <Divider height={12} />
      {signUpError !== "" && (
        <Text numberOfLines={1} style={styles.error}>
          {signUpError}
        </Text>
      )}
      <Divider height={12} />
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

export default SignUp;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 370,
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
  error: {
    fontFamily: family.normal,
    color: colors.red,
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
