import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Components
import MainButton from "../../../../components/common/buttons/MainButton";
import Divider from "../../../../components/common/Divider";

// Theme
import { family } from "../../../../theme/fonts";
import colors from "../../../../theme/colors";

const MainSection = (props: any) => {
  const { setSection } = props;
  const loginHandler = () => {
    setSection("LogIn");
  };
  const signInHandler = () => {
    setSection("SignIn");
  };

  return (
    <LinearGradient
      colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.67)"]}
      style={styles.mainSection}
      start={{ x: 0, y: 0 }}
      locations={[0, 0.6, 1]}
    >
      <MainButton title={"Inicia sesión"} onPress={loginHandler} />
      <Divider height={20} />
      <Text style={styles.text}>
        <Text>¿No tienes cuenta?</Text>{" "}
        <TouchableOpacity onPress={signInHandler}>
          <Text style={{ fontFamily: family.bold }}>Regístrate</Text>
        </TouchableOpacity>
      </Text>
    </LinearGradient>
  );
};

export default MainSection;

const styles = StyleSheet.create({
  mainSection: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 50,
    paddingHorizontal: 22,
  },
  text: {
    fontFamily: family.normal,
    color: colors.white,
    fontSize: 18,
    textAlign: "center",
  },
});
