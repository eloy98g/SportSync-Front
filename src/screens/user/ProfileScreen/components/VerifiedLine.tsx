import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// Components
import Divider from "../../../../components/common/Divider";
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";

interface Props {
  text: string;
}

const VerifiedLine = ({ text }: Props) => (
  <View style={styles.verifiedLine}>
    <Image
      style={styles.image}
      source={require("../../../../assets/images/check.png")}
    />
    <Divider width={6} />
    <Text style={styles.text}>{text}</Text>
  </View>
);

export default VerifiedLine;

const styles = StyleSheet.create({
  verifiedLine: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    fontFamily: family.light,
    color: colors.black,
    fontSize: 14,
  },
  image: {
    width: 15,
    height: 15,
  },
});
