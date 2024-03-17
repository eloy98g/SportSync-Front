import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Components
import TouchableText from "../../../../components/common/buttons/TouchableText";
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
      locations={[0, 1]}
    >
      <MainButton title={"Inicia sesión"} onPress={loginHandler} fontSize={18}/>
      <Divider height={20} />
      <View style={styles.row}>
        <Text style={styles.text}>¿No tienes cuenta? </Text>
        <TouchableText
          onPress={signInHandler}
          text="Regístrate"
          textStyle={[styles.text, { fontFamily: family.bold }]}
        />
      </View>
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
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
