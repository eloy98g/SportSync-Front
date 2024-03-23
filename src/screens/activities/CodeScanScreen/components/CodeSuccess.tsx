import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

// Components
import Divider from "../../../../components/common/Divider";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

interface Props {
  data: any;
}

const CodeSuccess = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        ¡Has entrado correctamente a la actividad!
      </Text>
    </View>
  );
};

export default CodeSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  text: {
    fontFamily: family.normal,
    color: colors.primary,
    fontSize: 14,
  },
});
