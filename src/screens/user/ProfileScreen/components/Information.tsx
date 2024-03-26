import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Divider from "../../../../components/common/Divider";
import User from "../../../../store/types/user/User";
import colors from "../../../../theme/colors";
import { family } from "../../../../theme/fonts";
import unixToDate from "../../../../utils/date/unixToDate";
import VerifiedLine from "./VerifiedLine";

interface Props {
  data: User;
}
const Information = ({ data }: Props) => {
  const {
    phoneVerified,
    emailVerified,
    creationDate,
    participated,
    published,
  } = data;

  return (
    <View style={styles.container}>
      {phoneVerified && <VerifiedLine text={"Correo electrónico confirmado"} />}
      {phoneVerified && <Divider height={4} />}
      {emailVerified && <VerifiedLine text={"Móvil confirmado"} />}
      {emailVerified && <Divider height={8} />}
      <Text style={styles.text}>{published} actividades publicadas</Text>
      <Divider height={8} />
      <Text style={styles.text}>{participated} participaciones</Text>
      <Divider height={8} />
      <Text style={styles.text}>Usuario desde {unixToDate(creationDate)}</Text>
    </View>
  );
};

export default Information;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  text: {
    fontFamily: family.light,
    color: colors.black,
    fontSize: 14,
  },
});
