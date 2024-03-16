import React from "react";
import { StyleSheet, View } from "react-native";

// Components
import Icon from "../common/Icon";
import InfoItem from "./InfoItem";

// Theme
import colors from "../../theme/colors";
import Divider from "../common/Divider";

const AccessInfo = () => {
  return (
    <View style={styles.container}>
      <InfoItem
        title={"Actividad pública"}
        text={
          "Las actividades públicas son actividades abiertas a cualquier persona"
        }
        icon={<Icon icon="public" size={18} color={colors.black} />}
      />
      <Divider height={30} />
      <InfoItem
        title={"Actividad privada"}
        text={
          "Las actividades privadas son actividades sólo accesibles a usuarios con código o invitación"
        }
        icon={<Icon icon="private" size={18} color={colors.black} />}
      />
    </View>
  );
};

export default AccessInfo;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
