import { StyleSheet, Text } from "react-native";
import React from "react";

// Components
import Divider from "../../../../components/common/Divider";

// Theme
import { family } from "../../../../theme/fonts";
import colors from "../../../../theme/colors";

interface Props {
  participated: number;
  published: number;
}
const InfoContent = ({ participated, published }: Props) => {
  return (
    <>
      {published > 0 && (
        <Text style={styles.text}>{`${published} ${
          published > 1 ? "Actividades administradas" : "Actividad administrada"
        }`}</Text>
      )}
      {published > 0 && <Divider height={8} />}
      {participated > 0 && (
         <Text style={styles.text}>{`${participated} ${
          participated > 1 ? "Participaciones confirmadas" : "Participación confirmada"
        }`}</Text>
      )}
      {participated > 0 && <Divider height={8} />}
    </>
  );
};

export default InfoContent;

const styles = StyleSheet.create({
  text: {
    fontFamily: family.light,
    color: colors.black,
    fontSize: 14,
  },
});
