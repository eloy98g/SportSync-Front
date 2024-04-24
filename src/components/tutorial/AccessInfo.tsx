import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import Divider from "../common/Divider";
import Icon from "../common/Icon";
import InfoItem from "./InfoItem";

// Theme
import colors from "../../theme/colors";

const AccessInfo = () => {
  return (
    <View style={styles.container}>
      <InfoItem
        title={"Actividad abierta"}
        text={
          "Los usuarios se unirán sin necesidad de aprobación por parte del administrador."
        }
        icon={<Icon icon="open" size={18} color={colors.black} />}
      />
      <Divider height={30} />
      <InfoItem
        title={"Actividad cerrada"}
        text={
          "Cuando un usuario quiera unirse, te llegará una notificación y podrás adminitirlo o no."
        }
        icon={<Icon icon="closed" size={18} color={colors.black} />}
      />
    </View>
  );
};

export default AccessInfo;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 8
  },
});
