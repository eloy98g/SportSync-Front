import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import MainButton from "../../../../components/common/buttons/MainButton";

// Components
import Divider from "../../../../components/common/Divider";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

interface Props {
  data: any;
  setStatus: any;
}

const CodeError = ({ data, setStatus }: Props) => {
  const handleBack = () => {
    setStatus("idle");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>La actividad o el código no es correcto</Text>
      <Divider height={40} />
      <View style={styles.buttonContainer}>
        <MainButton
          title="Intentalo de nuevo"
          onPress={handleBack}
          height={46}
        />
      </View>
    </View>
  );
};

export default CodeError;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: family.normal,
    color: colors.primary,
    fontSize: 24,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    height: 50,
    paddingHorizontal: 24,
  },
});
