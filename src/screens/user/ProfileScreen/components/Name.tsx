import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Verified } from "lucide-react-native";

// Theme
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

interface Props {
  name: string;
  verified: boolean;
}
const Name = ({ name, verified }: Props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{name} </Text>
    {verified && <Verified size={18} color={colors.secondary} />}
  </View>
);

export default Name;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems:"center"
  },
  text: {
    fontFamily: family.bold,
    color: colors.black,
    fontSize: 16,
  },
});
