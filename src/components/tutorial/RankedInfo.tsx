import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import Divider from "../common/Divider";
import Icon from "../common/Icon";
import InfoItem from "./InfoItem";

// Theme
import colors from "../../theme/colors";

const RankedInfo = () => {
  return (
    <View style={styles.container}>
      <InfoItem
        title={"Actividad competitiva"}
        text={
          "Las actividades competitivas influyen en el nivel de los oponentes y en la puntuación personal."
        }
        icon={<Icon icon="competitive" size={18} color={colors.black} />}
      />
      <Divider height={30} />
      <InfoItem
        title={"Actividad normal"}
        text={
          "Las actividades normales no influirán en las puntuaciones personales, únicamente se reflejarán en el historial de actividades."
        }
        icon={<Icon icon="normal" size={18} color={colors.black} />}
      />
    </View>
  );
};

export default RankedInfo;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 8,
  },
});
